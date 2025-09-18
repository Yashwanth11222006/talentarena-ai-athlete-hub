import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Athletes from "./pages/Athletes";
import Coaches from "./pages/Coaches";
import Officials from "./pages/Officials";
import Features from "./pages/Features";
import Networking from "./pages/Networking";
import Leaderboard from "./pages/Leaderboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ToastProvider } from "./components/ui/toast-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/officials" element={<Officials />} />
          <Route path="/features" element={<Features />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastProvider />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
