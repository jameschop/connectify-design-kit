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
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="gradient-primary px-6 pt-12 pb-8 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-smooth"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Balance Card */}
        <div className="text-center text-white mb-6">
          <div className="inline-flex items-center gap-2 mb-2 opacity-90">
            <WalletIcon className="w-5 h-5" />
            <p className="text-sm">My Wallet</p>
          </div>
          <h1 className="text-5xl font-bold mb-1 animate-fade-in">₦45,000</h1>
          <p className="text-xs opacity-75">Ready for your next booking</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={handleTopUp}
            className="flex-1 h-12 bg-white text-primary hover:bg-white/90 font-semibold shadow-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            Top Up
          </Button>
          <Button 
            onClick={handleManageCards}
            className="flex-1 h-12 bg-white/20 text-white hover:bg-white/30 border-0 font-semibold backdrop-blur-sm"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Cards
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
            <div className="text-sm text-muted-foreground mb-1">This Month</div>
            <div className="text-2xl font-bold text-foreground">₦32,500</div>
            <div className="text-xs text-muted-foreground mt-1">5 bookings</div>
          </div>
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
            <div className="text-sm text-muted-foreground mb-1">Total Saved</div>
            <div className="text-2xl font-bold text-foreground">₦8,750</div>
            <div className="text-xs text-accent font-medium mt-1">via discounts</div>
          </div>
        </div>
      </div>

      {/* Quick Top-up */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Top-up</h2>
        <div className="grid grid-cols-3 gap-3">
          {['₦5,000', '₦10,000', '₦20,000'].map((amount) => (
            <button
              key={amount}
              onClick={() => handleQuickTopUp(amount)}
              className="bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium hover:border-primary/30 transition-smooth"
            >
              <div className="text-xl font-bold text-foreground">{amount}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
          <button 
            onClick={handleViewAll}
            className="text-sm text-primary font-medium"
          >
            View all
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
