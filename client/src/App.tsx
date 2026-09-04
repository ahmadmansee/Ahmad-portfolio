import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { CustomCursor } from "@/components/CustomCursor";

const Home = lazy(() => import("@/pages/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("@/pages/About").then((module) => ({ default: module.About })));
const Contact = lazy(() => import("@/pages/Contact").then((module) => ({ default: module.Contact })));
const CaseStudyPickup = lazy(() => import("@/pages/CaseStudyPickup").then((module) => ({ default: module.CaseStudyPickup })));
const CaseStudyEdugla = lazy(() => import("@/pages/CaseStudyEdugla").then((module) => ({ default: module.CaseStudyEdugla })));
const CaseStudyVoice = lazy(() => import("@/pages/CaseStudyVoice").then((module) => ({ default: module.CaseStudyVoice })));
const NotFound = lazy(() => import("@/pages/not-found"));

const PageLoader = () => (
  <div className="min-h-screen bg-black" role="status" aria-label="Loading page" />
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/case-study/pickup" component={CaseStudyPickup} />
        <Route path="/case-study/edugla" component={CaseStudyEdugla} />
        <Route path="/case-study/voice" component={CaseStudyVoice} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <>
      <ScrollRestoration />
      <CustomCursor />
      <Router />
    </>
  );
}

export default App;
