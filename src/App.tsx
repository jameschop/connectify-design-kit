import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Auth from "./pages/Auth";
import RoleSelection from "./pages/RoleSelection";
import CustomerOnboarding from "./pages/CustomerOnboarding";
import ProviderOnboarding from "./pages/ProviderOnboarding";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import BookingFlow from "./pages/BookingFlow";
import Bookings from "./pages/Bookings";
import ManageBookings from "./pages/ManageBookings";
import Availability from "./pages/Availability";
import ServiceDetail from "./pages/ServiceDetail";
import SearchResults from "./pages/SearchResults";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import ProviderWallet from "./pages/ProviderWallet";
import CustomerWallet from "./pages/CustomerWallet";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/customer-onboarding" element={<CustomerOnboarding />} />
          <Route path="/provider-onboarding" element={<ProviderOnboarding />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/provider" element={<ProviderDashboard />} />
          <Route path="/booking" element={<BookingFlow />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/wallet/provider" element={<ProviderWallet />} />
          <Route path="/wallet/customer" element={<CustomerWallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
