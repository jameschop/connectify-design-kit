import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageBookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

  const upcomingBookings = [
    {
      id: 1,
      customer: "Adebayo Williams",
      service: "House Cleaning",
      time: "Today, 2:00 PM",
      date: "Dec 15, 2024",
      location: "Lekki Phase 1",
      price: "₦15,000",
      phone: "+234 812 345 6789",
      status: "confirmed",
    },
    {
      id: 2,
      customer: "Grace Okonkwo",
      service: "Deep Cleaning",
      time: "Tomorrow, 10:00 AM",
      date: "Dec 16, 2024",
      location: "Victoria Island",
      price: "₦25,000",
      phone: "+234 803 456 7890",
      status: "pending",
    },
  ];

  const historyBookings = [
    {
      id: 3,
      customer: "Samuel Eze",
      service: "House Cleaning",
      time: "Dec 10, 2024",
      location: "Ikeja",
      price: "₦12,000",
      status: "completed",
      rating: 5,
    },
    {
      id: 4,
      customer: "Amaka Johnson",
      service: "Deep Cleaning",
      time: "Dec 8, 2024",
      location: "Surulere",
      price: "₦18,000",
      status: "completed",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-muted rounded-xl transition-smooth"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-bold text-foreground">Manage Bookings</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-smooth ${
                activeTab === "upcoming"
                  ? "bg-accent text-white"
                  : "bg-muted/30 text-foreground hover:bg-muted/50"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-smooth ${
                activeTab === "history"
                  ? "bg-accent text-white"
                  : "bg-muted/30 text-foreground hover:bg-muted/50"
              }`}
            >
              History
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-4">
        {activeTab === "upcoming" ? (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-card rounded-2xl p-4 shadow-soft border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {booking.customer}
                    </h3>
                    <p className="text-sm text-muted-foreground">{booking.service}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "confirmed"
                        ? "bg-accent/10 text-accent"
                        : "bg-yellow-500/10 text-yellow-600"
                    }`}
                  >
                    {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{booking.phone}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{booking.price}</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate("/messages")}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {historyBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-card rounded-2xl p-4 shadow-soft border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {booking.customer}
                    </h3>
                    <p className="text-sm text-muted-foreground">{booking.service}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600">
                    Completed
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{booking.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(booking.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;
