import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Briefcase, Phone, Mail, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="gradient-card px-6 pt-12 pb-8 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Profile Info */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-5xl shadow-strong">
              👩🏾
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-medium">
              <Edit className="w-4 h-4" />
            </button>
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-1">Chioma Nwosu</h1>
          <p className="text-sm text-muted-foreground mb-3">Professional Cleaner</p>

          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent">Verified Provider</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft border border-border">
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              Rating
            </div>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft border border-border">
            <div className="text-2xl font-bold text-foreground">127</div>
            <div className="text-xs text-muted-foreground mt-1">Reviews</div>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft border border-border">
            <div className="text-2xl font-bold text-foreground">89</div>
            <div className="text-xs text-muted-foreground mt-1">Jobs Done</div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
        <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Professional cleaning specialist with over 5 years of experience. I provide quality service for homes and offices across Lagos. Customer satisfaction is my priority.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">House Cleaning, Deep Cleaning, Office Cleaning</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Lekki, Victoria Island, Ikoyi</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">+234 800 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">chioma.nwosu@email.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Portfolio</h2>
          <button className="text-sm text-primary font-medium">Add photos</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square rounded-2xl bg-gradient-card border border-border flex items-center justify-center text-4xl"
            >
              🏠
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 space-y-3">
        <Button className="w-full h-12 gradient-primary border-0 font-semibold shadow-medium">
          Edit Profile
        </Button>
        <Button
          variant="outline"
          className="w-full h-12 font-semibold"
          onClick={() => navigate("/settings")}
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Profile;
