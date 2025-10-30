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
      {/* Professional Header */}
      <div className="bg-card border-b border-border px-6 pt-12 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-smooth"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Business Wallet</p>
            <h1 className="text-4xl font-bold text-foreground animate-fade-in">₦234,500</h1>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
            <ArrowDownLeft className="w-8 h-8 text-accent" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-accent font-semibold">↑ +₦12,000</span>
          <span className="text-muted-foreground">this week</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={handleWithdraw}
            className="h-14 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-medium rounded-2xl"
          >
            <Send className="w-5 h-5 mr-2" />
            Withdraw
          </Button>
          <Button 
            onClick={handleAddFunds}
            variant="outline"
            className="h-14 font-semibold rounded-2xl"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Funds
          </Button>
        </div>
      </div>

      {/* Business Stats */}
      <div className="px-6 pb-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Performance</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="text-xs text-muted-foreground">Revenue</div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">₦89,500</div>
            <div className="text-xs text-accent font-semibold">+24% vs last month</div>
          </div>
          <div className="bg-card rounded-2xl p-5 shadow-soft border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="text-xs text-muted-foreground">Withdrawn</div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">₦150K</div>
            <div className="text-xs text-muted-foreground">3 transfers</div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Transaction History</h3>
          <button 
            onClick={handleViewAll}
            className="text-sm text-primary font-semibold hover:underline"
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-soft transition-smooth"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === "credit"
                      ? "bg-accent/10 text-accent"
                      : "bg-muted"
                  }`}
                >
                  <transaction.icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground text-sm">
                      {transaction.title}
                    </h3>
                    <div
                      className={`text-sm font-bold ${
                        transaction.type === "credit" ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {transaction.amount}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {transaction.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">
                    {transaction.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Notice */}
      <div className="px-6">
        <div className="bg-accent/5 rounded-2xl p-4 border border-accent/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🔒</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-foreground mb-1">
                Bank-Grade Security
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your earnings are protected with enterprise-level encryption. All withdrawals are processed securely and verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
