"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Percent, Lightbulb, Target, Brain, Star } from "lucide-react"

const investmentHoldings = [
  { asset: "SEI", amount: 50000, value: 42500, change24h: 5.2, status: "Up", allocation: 45 },
  { asset: "USDC", amount: 15000, value: 15000, change24h: 0.0, status: "Stable", allocation: 20 },
  { asset: "ATOM", amount: 1200, value: 10800, change24h: -1.8, status: "Down", allocation: 15 },
  { asset: "OSMO", amount: 8000, value: 6400, change24h: 3.1, status: "Up", allocation: 12 },
  { asset: "JUNO", amount: 3000, value: 2700, change24h: -0.5, status: "Down", allocation: 8 },
]

const recentTrades = [
  { type: "Buy", asset: "SEI", amount: 1000, price: 0.85, date: "2024-07-29", profit: 127.5 },
  { type: "Sell", asset: "ATOM", amount: 50, price: 9.0, date: "2024-07-28", profit: -23.4 },
  { type: "Buy", asset: "OSMO", amount: 200, price: 0.8, date: "2024-07-27", profit: 45.6 },
  { type: "Swap", asset: "USDC/SEI", amount: "500 USDC", date: "2024-07-26", profit: 89.2 },
]

const aiRecommendations = [
  {
    type: "Rebalance",
    title: "Portfolio Rebalancing Opportunity",
    description:
      "Consider reducing SEI exposure from 45% to 35% and increasing stablecoin allocation for better risk management.",
    confidence: 87,
    impact: "Medium",
  },
  {
    type: "Entry",
    title: "New DeFi Protocol Opportunity",
    description:
      "Emerging Sei-based lending protocol showing 23% APY with strong fundamentals. Recommended allocation: 5-8%.",
    confidence: 92,
    impact: "High",
  },
  {
    type: "Exit",
    title: "ATOM Position Review",
    description:
      "Technical indicators suggest potential 15% correction. Consider setting stop-loss at $8.50 or hedging position.",
    confidence: 78,
    impact: "Medium",
  },
]

export default function EnhancedInvestmentStrategy() {
  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-sei-blue">
              <DollarSign className="w-5 h-5 mr-2" />
              Current Holdings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {investmentHoldings.map((holding) => (
                <div
                  key={holding.asset}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-sei-gradient rounded-lg flex items-center justify-center text-white font-bold">
                      {holding.asset.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{holding.asset}</div>
                      <div className="text-sm text-muted-foreground">{holding.amount.toLocaleString()} tokens</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sei-blue">${holding.value.toLocaleString()}</div>
                    <div
                      className={`text-sm flex items-center justify-end ${
                        holding.status === "Up"
                          ? "text-green-500"
                          : holding.status === "Down"
                            ? "text-red-500"
                            : "text-muted-foreground"
                      }`}
                    >
                      {holding.status === "Up" && <TrendingUp className="w-3 h-3 mr-1" />}
                      {holding.status === "Down" && <TrendingDown className="w-3 h-3 mr-1" />}
                      {holding.change24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-sei-blue">
              <Percent className="w-5 h-5 mr-2" />
              Recent Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrades.map((trade, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <Badge
                      className={`${
                        trade.type === "Buy"
                          ? "bg-green-500/10 text-green-600 border-green-500/20"
                          : trade.type === "Sell"
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                      }`}
                    >
                      {trade.type}
                    </Badge>
                    <div>
                      <div className="font-semibold text-foreground">{trade.asset}</div>
                      <div className="text-sm text-muted-foreground">
                        {trade.amount} {trade.price ? `@ $${trade.price}` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{trade.date}</div>
                    {trade.profit && (
                      <div className={`text-sm font-semibold ${trade.profit > 0 ? "text-green-500" : "text-red-500"}`}>
                        {trade.profit > 0 ? "+" : ""}${trade.profit.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="bg-gradient-to-r from-sei-blue/5 via-background to-sei-blue/5 border-sei-blue/20 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <Brain className="w-5 h-5 mr-2" />
            AI-Powered Strategy Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {aiRecommendations.map((rec, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      rec.type === "Rebalance"
                        ? "bg-blue-500/10 text-blue-600"
                        : rec.type === "Entry"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-yellow-500/10 text-yellow-600"
                    }`}
                  >
                    {rec.type === "Rebalance" && <Target className="w-5 h-5" />}
                    {rec.type === "Entry" && <TrendingUp className="w-5 h-5" />}
                    {rec.type === "Exit" && <TrendingDown className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{rec.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        className={`${
                          rec.impact === "High"
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                        }`}
                      >
                        {rec.impact} Impact
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        {rec.confidence}% confidence
                      </div>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-sei-gradient hover:opacity-90 text-white">
                  Apply
                </Button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{rec.description}</p>
            </div>
          ))}

          <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Disclaimer:</strong> These recommendations are AI-generated based
                  on market analysis and historical data. Always conduct your own research and consider your risk
                  tolerance before making investment decisions. Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
