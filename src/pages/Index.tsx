import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Service marketplace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        </div>

        <div className="relative w-full px-6 py-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-white">Trusted by 50,000+ Nigerians</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight px-4">
              Find trusted services,
              <br />
              <span className="text-primary">anytime, anywhere</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-md mx-auto px-4">
              Connect with verified professionals for home services, tutoring, repairs, and more.
            </p>

            <div className="flex flex-col gap-3 pt-4 px-4">
              <Button
                onClick={() => navigate("/auth")}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold shadow-glow"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/auth")}
                className="w-full h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-foreground mb-8">
          Why Choose Connectify?
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-card border border-border">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Verified Professionals</h3>
            <p className="text-sm text-muted-foreground">
              All service providers are verified and background-checked for your safety.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Booking</h3>
            <p className="text-sm text-muted-foreground">
              Book services in minutes and get instant confirmation from providers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Reviews</h3>
            <p className="text-sm text-muted-foreground">
              Read authentic reviews from real customers to make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-6 bg-accent/5">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to get started?
          </h2>
          <p className="text-base text-muted-foreground">
            Join thousands of satisfied customers and service providers today.
          </p>
          <Button
            onClick={() => navigate("/auth")}
            className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold"
          >
            Create Free Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
