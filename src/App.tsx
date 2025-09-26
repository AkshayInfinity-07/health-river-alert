import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Index from "./pages/Index";
import WaterQuality from "./pages/WaterQuality";
import DiseaseSurveillance from "./pages/DiseaseSurveillance";
import CommunityReportsPage from "./pages/CommunityReportsPage";
import AlertsPage from "./pages/AlertsPage";
import RiskAssessment from "./pages/RiskAssessment";
import Education from "./pages/Education";
import InteractiveMap from "./pages/InteractiveMap";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <div className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:block">Notifications</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:block">Dr. Admin</span>
                  </Button>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/water-quality" element={<WaterQuality />} />
                  <Route path="/disease-surveillance" element={<DiseaseSurveillance />} />
                  <Route path="/community-reports" element={<CommunityReportsPage />} />
                  <Route path="/alerts" element={<AlertsPage />} />
                  <Route path="/risk-assessment" element={<RiskAssessment />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/map" element={<InteractiveMap />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
