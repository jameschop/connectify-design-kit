import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Service marketplace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-white">Trusted by 50,000+ Nigerians</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Find trusted services,
              <br />
              <span className="text-primary">anytime, anywhere</span>
            </h1>

            <p className="text-xl text-white/80 max-w-lg mx-auto">
              Connect with verified professionals for home services, tutoring, repairs, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => navigate("/auth")}
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-semibold shadow-glow"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/auth")}
                className="h-14 px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Connectify?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Verified Professionals</h3>
              <p className="text-muted-foreground">
                All service providers are verified and background-checked for your safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quick Booking</h3>
              <p className="text-muted-foreground">
                Book services in minutes and get instant confirmation from providers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Trusted Reviews</h3>
              <p className="text-muted-foreground">
                Read authentic reviews from real customers to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers and service providers today.
          </p>
          <Button
            onClick={() => navigate("/auth")}
            className="h-14 px-8 bg-accent hover:bg-accent/90 text-white font-semibold"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
