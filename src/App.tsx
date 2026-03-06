import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aprender from "./pages/Aprender";
import NotFound from "./pages/NotFound";
import {
  trackPageLoad,
  initScrollDepthTracking,
  initSectionTracking,
  initTimeOnPageTracking,
} from "./lib/gtm";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    trackPageLoad();
    const cleanupScroll = initScrollDepthTracking();
    const cleanupTime = initTimeOnPageTracking();

    const timeout = setTimeout(() => {
      initSectionTracking();
    }, 1000);

    return () => {
      cleanupScroll();
      cleanupTime();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aprender" element={<Aprender />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
