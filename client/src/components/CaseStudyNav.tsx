import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavProject {
  label: string;
  href: string;
}

interface CaseStudyNavProps {
  prev: NavProject;
  next: NavProject;
}

export const CaseStudyNav = ({ prev, next }: CaseStudyNavProps) => (
  <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20 py-12 border-t border-white/10">
    <div className="max-w-[1045px] mx-auto flex items-center justify-between">
      <Link href={prev.href}>
        <button className="group flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors shrink-0">
            <ArrowLeft size={18} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-xs uppercase tracking-widest mb-0.5">
              Previous
            </span>
            <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-base md:text-lg group-hover:text-[#cf3570] transition-colors">
              {prev.label}
            </span>
          </div>
        </button>
      </Link>

      <Link href={next.href}>
        <button className="group flex items-center gap-4 text-right">
          <div className="flex flex-col">
            <span className="font-['Inter_Tight',Helvetica] text-[#95989c] text-xs uppercase tracking-widest mb-0.5">
              Next
            </span>
            <span className="font-['Inter_Tight',Helvetica] font-semibold text-white text-base md:text-lg group-hover:text-[#cf3570] transition-colors">
              {next.label}
            </span>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors shrink-0">
            <ArrowRight size={18} className="text-white" />
          </div>
        </button>
      </Link>
    </div>
  </div>
);
