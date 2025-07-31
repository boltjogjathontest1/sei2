"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PieChart, BarChart3, Calendar, Gauge, Brain } from "lucide-react"

export default function EnhancedSpendingPatterns() {
  const [activeTab, setActiveTab] = useState("overview")

  const spendingCategories = [
    { name: "DeFi Trading", percentage: 45, amount: "234.5K SEI", color: "#22D3EE", transactions: 156 },
    { name: "NFT Purchases", percentage: 28, amount: "145.8K SEI", color: "#8B5CF6", transactions: 23 },
    { name: "Staking Rewards", percentage: 15, amount: "78.2K SEI", color: "#10B981", transactions: 45 },
    { name: "P2P Transfers", percentage: 12, amount: "62.5K SEI", color: "#F59E0B", transactions: 89 },
  ]

  const patternInsights = [
    {
      title: "Sophisticated DeFi User",
      description: "Consistent trading patterns with focus on yield farming",
      confidence: 94,
      trend: "increasing",
    },
    {
      title: "Risk-Conscious Investor",
      description: "Balanced portfolio with conservative approach",
      confidence: 87,
      trend: "stable",
    },
    {
      title: "Early Protocol Adopter",
      description: "Quick to test new DeFi protocols and opportunities",
      confidence: 76,
      trend: "increasing",
    },
  ]

  const transactionTimeline = [
    { time: "00:00", volume: 12, type: "low" },
    { time: "04:00", volume: 8, type: "low" },
    { time: "08:00", volume: 45, type: "high" },
    { time: "12:00", volume: 67, type: "high" },
    { time: "16:00", volume: 89, type: "peak" },
    { time: "20:00", volume: 34, type: "medium" },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center text-sei-blue text-xl">
          <PieChart className="w-6 h-6 mr-3" />
          Spending Patterns Intelligence
          <Badge variant="outline" className="ml-3 border-sei-blue text-sei-blue animate-pulse">
            Live Analysis
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-secondary h-12">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-sei-blue data-[state=active]:text-primary-foreground text-sm font-semibold"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="categories"
              className="data-[state=active]:bg-sei-blue data-[state=active]:text-primary-foreground text-sm font-semibold"
            >
              Categories
            </TabsTrigger>
            <TabsTrigger
              value="timeline"
              className="data-[state=active]:bg-sei-blue data-[state=active]:text-primary-foreground text-sm font-semibold"
            >
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="patterns"
              className="data-[state=active]:bg-sei-blue data-[state=active]:text-primary-foreground text-sm font-semibold"
            >
              AI Patterns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Pie Chart Visualization */}
              <div className="relative">
                <div className="h-80 bg-background rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                  {/* Simulated Pie Chart */}
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full border-8 border-sei-blue opacity-20"></div>
                    <div className="absolute inset-4 rounded-full border-6 border-[#8B5CF6] opacity-30"></div>
                    <div className="absolute inset-8 rounded-full border-4 border-[#10B981] opacity-40"></div>
                    <div className="absolute inset-12 rounded-full border-2 border-[#F59E0B] opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-sei-blue">521K</div>
                        <div className="text-sm text-muted-foreground">Total SEI</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-sei-blue text-sei-blue">
                      Interactive
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Category Breakdown with Enhanced Design */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-sei-blue" />
                  Category Breakdown
                </h3>
                {spendingCategories.map((category, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-lg border border-border hover:border-sei-blue transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                        <span className="font-semibold text-lg">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-sei-blue">{category.percentage}%</div>
                        <div className="text-sm text-muted-foreground">{category.transactions} txns</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-foreground">{category.amount}</span>
                    </div>
                    <Progress value={category.percentage} className="h-3" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spendingCategories.map((category, index) => (
                <Card key={index} className="bg-background border-border hover:border-sei-blue transition-colors">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.percentage}%
                    </div>
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <div className="text-2xl font-bold text-sei-blue mb-1">{category.amount}</div>
                    <div className="text-sm text-muted-foreground">{category.transactions} transactions</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-8">
            <div className="space-y-6">
              {/* Transaction Timeline Chart */}
              <div className="h-64 bg-background rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">24h Transaction Volume</h3>
                  <Badge variant="outline" className="border-sei-blue text-sei-blue">
                    Real-time
                  </Badge>
                </div>
                <div className="flex items-end justify-between h-32 space-x-2">
                  {transactionTimeline.map((point, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-full rounded-t-lg ${
                          point.type === "peak"
                            ? "bg-sei-blue"
                            : point.type === "high"
                              ? "bg-green-500"
                              : point.type === "medium"
                                ? "bg-yellow-500"
                                : "bg-muted-foreground"
                        }`}
                        style={{ height: `${(point.volume / 100) * 100}%` }}
                      ></div>
                      <div className="text-xs text-muted-foreground mt-2">{point.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Heatmap */}
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-sei-blue" />
                    Activity Heatmap
                  </h3>
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Most Active: 4-6 PM
                  </Badge>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded ${
                        Math.random() > 0.7
                          ? "bg-sei-blue"
                          : Math.random() > 0.4
                            ? "bg-green-500"
                            : Math.random() > 0.2
                              ? "bg-yellow-500"
                              : "bg-muted"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-sei-blue" />
                <h3 className="text-xl font-bold">AI Pattern Recognition</h3>
                <Badge variant="outline" className="border-purple-500 text-purple-500">
                  Machine Learning
                </Badge>
              </div>

              {patternInsights.map((insight, index) => (
                <div key={index} className="p-6 bg-background rounded-xl border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-sei-blue mb-2">{insight.title}</h4>
                      <p className="text-muted-foreground mb-3">{insight.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-sei-blue">{insight.confidence}%</div>
                      <div className="text-sm text-muted-foreground">confidence</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress value={insight.confidence} className="flex-1 mr-4 h-3" />
                    <Badge
                      variant="outline"
                      className={`${
                        insight.trend === "increasing"
                          ? "border-green-500 text-green-500"
                          : insight.trend === "stable"
                            ? "border-blue-500 text-blue-500"
                            : "border-red-500 text-red-500"
                      }`}
                    >
                      {insight.trend}
                    </Badge>
                  </div>
                </div>
              ))}

              {/* Spending Velocity Gauge */}
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-6 h-6 text-sei-blue" />
                    <span className="text-lg font-semibold">Spending Velocity</span>
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-500 text-lg px-4 py-1">
                    High Activity
                  </Badge>
                </div>
                <div className="grid grid-cols-4 gap-6 text-center">
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-sei-blue mb-1">2.3</div>
                    <div className="text-sm text-muted-foreground">Tx/Hour</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-sei-blue mb-1">56</div>
                    <div className="text-sm text-muted-foreground">Tx/Day</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-sei-blue mb-1">1.2K</div>
                    <div className="text-sm text-muted-foreground">SEI/Day</div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-green-500 mb-1">+15%</div>
                    <div className="text-sm text-muted-foreground">vs Last Week</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
