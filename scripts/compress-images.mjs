import sharp from 'sharp';
import { readdir, mkdir, stat, copyFile, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Settings — safe for mockups with text and fine UI detail
const QUALITY = 90;          // WebP quality (0-100). 90 = visually lossless for mockups
const MAX_WIDTH = 3000;      // Max pixel width — still 2-3x retina display width
const MAX_HEIGHT = 3000;     // Max pixel height

// Skip small icons / already-tiny files (bytes)
const SKIP_BELOW = 50 * 1024; // 50KB

// PNGs that are actually icons/logos with transparency — keep as PNG, just compress
const KEEP_AS_PNG = new Set([
  'dh-logo.png', 'icon.png', 'image-2.png', 'image-76.png',
  'linkedin-1.png', 'linkedin-2.png', 'linkedin.png',
  'cube-2d-dark-1.png',
]);

async function processFile(inputPath, backupDir) {
  const filename = path.basename(inputPath);
  const ext = path.extname(filename).toLowerCase();

  // Only handle PNGs and JPGs — skip SVG, keep as-is
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const fileStat = await stat(inputPath);
  const originalSize = fileStat.size;

  // Skip already-small files
  if (originalSize < SKIP_BELOW) return null;

  // Backup original
  const backupPath = path.join(backupDir, filename);
  await copyFile(inputPath, backupPath);

  const isIcon = KEEP_AS_PNG.has(filename);
  const outExt = isIcon ? '.png' : '.webp';
  const outFilename = filename.replace(/\.(png|jpg|jpeg)$/i, outExt);
  const outPath = isIcon ? inputPath : inputPath.replace(/\.(png|jpg|jpeg)$/i, outExt);

  let pipeline = sharp(inputPath).resize({
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
    fit: 'inside',
    withoutEnlargement: true,
  });

  if (isIcon) {
    await pipeline.png({ compressionLevel: 9, quality: 90 }).toFile(outPath + '.tmp');
    await rename(outPath + '.tmp', outPath);
  } else {
    await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(outPath);
  }

  const newStat = await stat(outPath);
  const newSize = newStat.size;
  const saving = ((originalSize - newSize) / originalSize * 100).toFixed(1);

  return {
    original: filename,
    output: outFilename,
    originalKB: (originalSize / 1024).toFixed(0),
    newKB: (newSize / 1024).toFixed(0),
    saving: saving + '%',
    renamed: outFilename !== filename,
  };
}

async function compressFolder(folderPath) {
  const backupDir = path.join(folderPath, '_originals');
  if (!existsSync(backupDir)) await mkdir(backupDir, { recursive: true });

  const files = await readdir(folderPath);
  const results = [];

  for (const file of files) {
    if (file === '_originals') continue;
    if (file.endsWith('~')) continue; // skip temp files
    const filePath = path.join(folderPath, file);
    const s = await stat(filePath);
    if (!s.isFile()) continue;

    try {
      const result = await processFile(filePath, backupDir);
      if (result) {
        results.push(result);
        process.stdout.write(`  ✓ ${result.original} → ${result.output} (${result.originalKB}KB → ${result.newKB}KB, saved ${result.saving})\n`);
      }
    } catch (e) {
      console.error(`  ✗ ${file}: ${e.message}`);
    }
  }
  return results;
}

// Which folder to process — pass as CLI arg, default to pickup only (test run)
const target = process.argv[2] || 'pickup-only';

const folders = {
  'pickup-only': ['client/public/case-study/pickup'],
  'all': [
    'client/public/case-study/pickup',
    'client/public/case-study/edugla',
    'client/public/case-study/voice',
    'client/public/figmaAssets',
  ],
};

const toProcess = folders[target] || folders['pickup-only'];

let grandTotal = { originalKB: 0, newKB: 0, count: 0 };

for (const folder of toProcess) {
  console.log(`\n📁 ${folder}`);
  const results = await compressFolder(folder);
  for (const r of results) {
    grandTotal.originalKB += parseInt(r.originalKB);
    grandTotal.newKB += parseInt(r.newKB);
    grandTotal.count++;
  }
}

console.log(`\n📊 Summary: ${grandTotal.count} images`);
console.log(`   Before: ${(grandTotal.originalKB / 1024).toFixed(1)} MB`);
console.log(`   After:  ${(grandTotal.newKB / 1024).toFixed(1)} MB`);
console.log(`   Saved:  ${((grandTotal.originalKB - grandTotal.newKB) / 1024).toFixed(1)} MB (${((1 - grandTotal.newKB / grandTotal.originalKB) * 100).toFixed(1)}%)`);
