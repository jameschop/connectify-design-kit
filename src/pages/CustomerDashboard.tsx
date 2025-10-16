import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Clock, TrendingUp, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Plumbing", icon: "🔧" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Electrical", icon: "⚡" },
  { name: "Tutoring", icon: "📚" },
  { name: "Beauty", icon: "💅" },
  { name: "Repair", icon: "🔨" },
];

const featuredProviders = [
  {
    id: 1,
    name: "Chioma Nwosu",
    service: "House Cleaning",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 km",
    price: "₦8,000/hr",
    image: "👩🏾",
    verified: true,
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    service: "Plumbing Expert",
    rating: 4.8,
    reviews: 94,
    distance: "1.8 km",
    price: "₦12,000/hr",
    image: "👨🏾",
    verified: true,
  },
  {
    id: 3,
    name: "Blessing Okafor",
    service: "Math Tutor",
    rating: 5.0,
    reviews: 156,
    distance: "3.5 km",
    price: "₦5,000/hr",
    image: "👩🏾‍🏫",
    verified: true,
  },
];

const CustomerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="gradient-card px-6 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Hi, Samuel 👋
            </h1>
            <p className="text-sm text-muted-foreground mt-1">What do you need today?</p>
          </div>
          <button
            onClick={() => navigate("/profile")}
            className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl shadow-medium"
          >
            😊
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for services..."
            className="pl-12 h-14 bg-card border-0 shadow-soft focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="bg-card rounded-2xl p-4 text-center hover:shadow-medium transition-smooth border border-border"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-xs font-medium text-foreground">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Providers */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Featured Near You</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>

        <div className="space-y-3">
          {featuredProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => navigate("/booking")}
              className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium transition-smooth text-left"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-3xl flex-shrink-0">
                  {provider.image}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-1">
                        {provider.name}
                        {provider.verified && (
                          <span className="text-primary text-xs">✓</span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{provider.service}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-foreground">
                        {provider.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{provider.rating}</span>
                      <span>({provider.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{provider.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-card border-t border-border px-6 py-4">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-6 h-6" fill="currentColor" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => navigate("/bookings")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Clock className="w-6 h-6" />
            <span className="text-xs font-medium">Bookings</span>
          </button>
          <button
            onClick={() => navigate("/wallet")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs font-medium">Wallet</span>
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <span className="text-2xl">⚙️</span>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
