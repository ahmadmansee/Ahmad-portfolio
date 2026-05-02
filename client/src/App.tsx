import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { CaseStudyPickup } from "@/pages/CaseStudyPickup";
import { CaseStudyEdugla } from "@/pages/CaseStudyEdugla";
import { CaseStudyVoice } from "@/pages/CaseStudyVoice";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { CustomCursor } from "@/components/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-study/pickup" component={CaseStudyPickup} />
      <Route path="/case-study/edugla" component={CaseStudyEdugla} />
      <Route path="/case-study/voice" component={CaseStudyVoice} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollRestoration />
        <CustomCursor />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
