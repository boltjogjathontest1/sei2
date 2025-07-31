"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Bell, TrendingUp, DollarSign, Shield, Zap, Activity, Eye } from "lucide-react"

const flashAlerts = [
  {
    id: 1,
    type: "Price Spike",
    asset: "SEI",
    details: "SEI price surged by 15% in the last hour, breaking resistance at $0.92.",
    time: "5 minutes ago",
    severity: "High",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    action: "View Chart",
  },
  {
    id: 2,
    type: "Large Transaction",
    asset: "sei1whale...",
    details: "Whale wallet moved 500,000 SEI to a new address. Potential market impact expected.",
    time: "15 minutes ago",
    severity: "Critical",
    icon: DollarSign,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    action: "Track Wallet",
  },
  {
    id: 3,
    type: "Liquidation Risk",
    asset: "ATOM Position",
    details: "Your ATOM position in Protocol X is approaching liquidation threshold at $8.20.",
    time: "30 minutes ago",
    severity: "Critical",
    icon: AlertCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    action: "Add Collateral",
  },
  {
    id: 4,
    type: "Arbitrage Opportunity",
    asset: "SEI/USDC",
    details: "Price difference of 2.3% detected between Sei DEX and Sei Swap. Potential profit: $340.",
    time: "45 minutes ago",
    severity: "Medium",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    action: "Execute Trade",
  },
  {
    id: 5,
    type: "New Listing",
    asset: "XYZ Token",
    details: "XYZ Token listed on Sei DEX with initial liquidity of $2.1M. Early trading opportunity.",
    time: "1 hour ago",
    severity: "Low",
    icon: Bell,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    action: "Research Token",
  },
  {
    id: 6,
    type: "Staking Reward",
    asset: "SEI Staking",
    details: "Staking rewards of 127.5 SEI have been distributed to your wallet.",
    time: "2 hours ago",
    severity: "Low",
    icon: Zap,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    action: "View Rewards",
  },
]

const alertStats = [
  { label: "Total Alerts (24h)", value: "47", change: "+12%" },
  { label: "Critical Alerts", value: "3", change: "-25%" },
  { label: "Response Time", value: "0.8s", change: "Optimal" },
  { label: "Accuracy Rate", value: "94.2%", change: "+2.1%" },
]

export default function EnhancedFlashAlerts() {
  return (
    <div className="space-y-6">
      {/* Alert Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {alertStats.map((stat, index) => (
          <Card
            key={index}
            className="bg-card/50 glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-sei-blue mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
              <Badge
                className={`text-xs ${
                  stat.change.includes("+")
                    ? "bg-green-500/10 text-green-600 border-green-500/20"
                    : stat.change.includes("-")
                      ? "bg-red-500/10 text-red-600 border-red-500/20"
                      : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                }`}
              >
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Flash Alerts Feed */}
      <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center text-sei-blue">
              <Bell className="w-5 h-5 mr-2" />
              Flash Alerts Feed
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {flashAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${alert.bgColor} ${alert.borderColor}`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${alert.bgColor} border ${alert.borderColor}`}
                >
                  <alert.icon className={`w-6 h-6 ${alert.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-foreground text-lg">
                        {alert.type}: {alert.asset}
                      </h4>
                      <Badge
                        className={`${
                          alert.severity === "Critical"
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : alert.severity === "High"
                              ? "bg-orange-500/10 text-orange-600 border-orange-500/20"
                              : alert.severity === "Medium"
                                ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                                : "bg-green-500/10 text-green-600 border-green-500/20"
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <Button size="sm" className="bg-sei-gradient hover:opacity-90 text-white font-semibold">
                      {alert.action}
                    </Button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{alert.details}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Activity className="w-3 h-3 mr-1" />
                      {alert.time}
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-sei-blue">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {flashAlerts.length === 0 && (
            <div className="text-center py-12">
              <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">All Clear!</h3>
              <p className="text-muted-foreground">No new alerts at this time. We're monitoring your wallet 24/7.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Alert Settings */}
      <Card className="bg-gradient-to-r from-sei-blue/5 via-background to-sei-blue/5 border-sei-blue/20 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <Bell className="w-5 h-5 mr-2" />
            Alert Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Price Alerts</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Price movements &gt; 10%</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Volume spikes &gt; 50%</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Enabled</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Transaction Alerts</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Large transactions &gt; $10K</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Unusual activity patterns</span>
                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Paused</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button className="bg-sei-gradient hover:opacity-90 text-white font-semibold">
              Customize Alert Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
