import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ComplaintProvider } from "@/context/ComplaintContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Complaints from "@/pages/Complaints";
import SubmitComplaint from "@/pages/SubmitComplaint";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import HelplineChatbot from "@/components/HelplineChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <ProfileProvider>
          <TooltipProvider>
            <ComplaintProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    element={
                      <ProtectedRoute>
                        <AppLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/submit" element={<SubmitComplaint />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <HelplineChatbot />
              </BrowserRouter>
            </ComplaintProvider>
          </TooltipProvider>
        </ProfileProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
