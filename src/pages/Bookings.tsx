import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Star, MessageCircle } from "lucide-react";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");
  const navigate = useNavigate();

  const upcomingBookings = [
    {
      id: 1,
      provider: "Chioma Nwosu",
      service: "House Cleaning",
      date: "Today",
      time: "2:00 PM",
      location: "Lekki Phase 1",
      price: "₦8,000",
      status: "confirmed",
      image: "👩🏾",
    },
    {
      id: 2,
      provider: "Ibrahim Musa",
      service: "Plumbing Repair",
      date: "Tomorrow",
      time: "10:00 AM",
      location: "Victoria Island",
      price: "₦12,000",
      status: "pending",
      image: "👨🏾",
    },
  ];

  const completedBookings = [
    {
      id: 3,
      provider: "Blessing Okafor",
      service: "Math Tutoring",
      date: "Dec 10, 2024",
      time: "4:00 PM",
      location: "Ikoyi",
      price: "₦5,000",
      rating: 5,
      image: "👩🏾‍🏫",
    },
    {
      id: 4,
      provider: "Chioma Nwosu",
      service: "Office Cleaning",
      date: "Dec 8, 2024",
      time: "9:00 AM",
      location: "Lekki Phase 1",
      price: "₦15,000",
      rating: 5,
      image: "👩🏾",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="gradient-card px-6 pt-12 pb-6 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">My Bookings</h1>
          <p className="text-sm text-muted-foreground">Manage your service appointments</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-muted rounded-xl">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
              activeTab === "upcoming"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            }`}
          >
            Upcoming ({upcomingBookings.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
              activeTab === "completed"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            }`}
          >
            Completed ({completedBookings.length})
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="px-6 py-6 space-y-4">
        {activeTab === "upcoming" && upcomingBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-card rounded-2xl p-4 shadow-soft border border-border"
          >
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-3xl flex-shrink-0">
                {booking.image}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground">{booking.provider}</h3>
                    <p className="text-sm text-muted-foreground">{booking.service}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    booking.status === "confirmed"
                      ? "bg-accent/10 text-accent"
                      : "bg-amber-500/10 text-amber-600"
                  }`}>
                    {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                  </div>
                </div>

                <div className="space-y-1.5 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{booking.location}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{booking.price}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 h-9 text-sm">
                Reschedule
              </Button>
              <Button className="flex-1 h-9 gradient-primary border-0 text-sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chat
              </Button>
            </div>
          </div>
        ))}

        {activeTab === "completed" && completedBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-card rounded-2xl p-4 shadow-soft border border-border"
          >
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-3xl flex-shrink-0">
                {booking.image}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground">{booking.provider}</h3>
                    <p className="text-sm text-muted-foreground">{booking.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{booking.price}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < booking.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-border text-border"
                      }`}
                    />
                  ))}
                </div>

                <div className="text-xs text-muted-foreground">
                  Completed on {booking.date}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 h-9 text-sm">
                Book Again
              </Button>
              <Button variant="outline" className="flex-1 h-9 text-sm">
                Write Review
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {activeTab === "upcoming" && upcomingBookings.length === 0 && (
        <div className="px-6 py-12 text-center">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No upcoming bookings</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Book a service to get started
          </p>
          <Button
            onClick={() => navigate("/customer")}
            className="gradient-primary border-0"
          >
            Browse Services
          </Button>
        </div>
      )}
    </div>
  );
};

export default Bookings;
