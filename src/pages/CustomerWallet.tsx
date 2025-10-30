import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Plus, Wallet as WalletIcon, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const transactions = [
  {
    id: 1,
    type: "debit",
    title: "Payment Made",
    subtitle: "House Cleaning - Chioma Nwosu",
    amount: "-₦8,000",
    date: "Today, 2:45 PM",
    icon: ArrowUpRight,
  },
  {
    id: 2,
    type: "credit",
    title: "Wallet Top-up",
    subtitle: "Via Paystack",
    amount: "+₦50,000",
    date: "Yesterday, 11:30 AM",
    icon: Plus,
  },
  {
    id: 3,
    type: "debit",
    title: "Payment Made",
    subtitle: "Plumbing - Ibrahim Musa",
    amount: "-₦12,000",
    date: "Dec 12, 4:20 PM",
    icon: ArrowUpRight,
  },
  {
    id: 4,
    type: "credit",
    title: "Refund Received",
    subtitle: "Cancelled Service",
    amount: "+₦5,000",
    date: "Dec 11, 9:15 AM",
    icon: Plus,
  },
];

const CustomerWallet = () => {
  const navigate = useNavigate();

  const handleTopUp = () => {
    toast.success("Payment gateway opened! Processing top-up...");
  };

  const handleManageCards = () => {
    toast.info("Card management feature coming soon!");
  };

  const handleQuickTopUp = (amount: string) => {
    toast.success(`Adding ${amount} to your wallet...`);
  };

  const handleViewAll = () => {
    toast.info("Showing all transactions...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent px-6 pt-12 pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <button
          onClick={() => navigate(-1)}
          className="relative mb-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-smooth"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Balance Card */}
        <div className="relative text-center text-white mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <WalletIcon className="w-5 h-5 opacity-90" />
            <p className="text-sm opacity-90">My Wallet</p>
          </div>
          <h1 className="text-6xl font-bold mb-2 animate-fade-in tracking-tight">₦45,000</h1>
          <p className="text-sm opacity-80">Ready for your next booking</p>
        </div>
      </div>

      {/* Action Card - Overlapping */}
      <div className="px-6 -mt-20 relative z-10">
        <div className="bg-card rounded-3xl p-6 shadow-xl border border-border">
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={handleTopUp}
              className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-medium rounded-2xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Top Up
            </Button>
            <Button 
              onClick={handleManageCards}
              variant="outline"
              className="h-14 font-semibold rounded-2xl"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Cards
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border border-primary/20">
            <div className="text-xs text-muted-foreground mb-1">Spent This Month</div>
            <div className="text-2xl font-bold text-foreground">₦32,500</div>
            <div className="text-xs text-primary font-medium mt-1">5 bookings</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-5 border border-accent/20">
            <div className="text-xs text-muted-foreground mb-1">You've Saved</div>
            <div className="text-2xl font-bold text-accent">₦8,750</div>
            <div className="text-xs text-accent/70 font-medium mt-1">from deals</div>
          </div>
        </div>
      </div>

      {/* Quick Top-up */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Quick Top-up
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {['₦5,000', '₦10,000', '₦20,000'].map((amount) => (
            <button
              key={amount}
              onClick={() => handleQuickTopUp(amount)}
              className="bg-card rounded-2xl p-5 shadow-soft border border-border hover:shadow-lg hover:border-primary hover:scale-105 transition-smooth group"
            >
              <div className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors">Add</div>
              <div className="text-lg font-bold text-foreground">{amount}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            Recent Activity
          </h2>
          <button 
            onClick={handleViewAll}
            className="text-sm text-primary font-semibold hover:underline"
          >
            See All
          </button>
        </div>

        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium transition-smooth"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    transaction.type === "credit"
                      ? "bg-accent/10 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <transaction.icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm">
                    {transaction.title}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {transaction.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {transaction.date}
                  </p>
                </div>

                <div
                  className={`text-right font-semibold ${
                    transaction.type === "credit" ? "text-accent" : "text-foreground"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Notice */}
      <div className="px-6">
        <div className="bg-muted/50 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔒</div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-foreground mb-1">
                Your money is safe
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Funds are held securely until service completion. Automatic refund if service is cancelled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerWallet;
