import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppDialogProvider } from "@/hooks/useWhatsAppDialog";
import Maintenance from "./pages/Maintenance";
import Portfolio from "./pages/Portfolio";
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
        <WhatsAppDialogProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              {/* MAINTENANCE MODE — substituir Maintenance por Index para reativar */}
              <Route path="*" element={<Maintenance />} />
            </Routes>
          </BrowserRouter>
        </WhatsAppDialogProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
