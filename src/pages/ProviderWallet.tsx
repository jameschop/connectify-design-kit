import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Plus, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const transactions = [
  {
    id: 1,
    type: "credit",
    title: "Payment Received",
    subtitle: "House Cleaning - Adebayo Williams",
    amount: "+₦15,000",
    date: "Today, 2:45 PM",
    icon: ArrowDownLeft,
  },
  {
    id: 2,
    type: "debit",
    title: "Withdrawal",
    subtitle: "To GTBank ***4321",
    amount: "-₦50,000",
    date: "Yesterday, 11:30 AM",
    icon: ArrowUpRight,
  },
  {
    id: 3,
    type: "credit",
    title: "Payment Received",
    subtitle: "Deep Cleaning - Grace Okonkwo",
    amount: "+₦25,000",
    date: "Dec 12, 4:20 PM",
    icon: ArrowDownLeft,
  },
  {
    id: 4,
    type: "credit",
    title: "Payment Received",
    subtitle: "Tutoring Session - Tunde Bello",
    amount: "+₦8,000",
    date: "Dec 11, 9:15 AM",
    icon: ArrowDownLeft,
  },
];

const Wallet = () => {
  const navigate = useNavigate();

  const handleAddFunds = () => {
    toast.info("Add funds feature coming soon!");
  };

  const handleWithdraw = () => {
    toast.success("Withdrawal request initiated. Processing...");
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
          <p className="text-sm opacity-90 mb-2">Total Balance</p>
          <h1 className="text-5xl font-bold mb-1 animate-fade-in">₦234,500</h1>
          <p className="text-xs opacity-75">+₦12,000 this week</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={handleAddFunds}
            className="flex-1 h-12 bg-white text-primary hover:bg-white/90 font-semibold shadow-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Funds
          </Button>
          <Button 
            onClick={handleWithdraw}
            className="flex-1 h-12 bg-white/20 text-white hover:bg-white/30 border-0 font-semibold backdrop-blur-sm"
          >
            <Send className="w-5 h-5 mr-2" />
            Withdraw
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
            <div className="text-sm text-muted-foreground mb-1">This Month</div>
            <div className="text-2xl font-bold text-foreground">₦89,500</div>
            <div className="text-xs text-accent font-medium mt-1">+24% from last</div>
          </div>
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
            <div className="text-sm text-muted-foreground mb-1">Withdrawn</div>
            <div className="text-2xl font-bold text-foreground">₦150,000</div>
            <div className="text-xs text-muted-foreground mt-1">3 transactions</div>
          </div>
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
                All transactions are protected with bank-grade security. Your funds are insured and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
