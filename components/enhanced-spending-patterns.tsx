"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, PieChart, TrendingUp, TrendingDown } from "lucide-react"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
} from "recharts"

const spendingData = [
  { category: "DeFi Swaps", amount: 4500, percentage: 35, fill: "hsl(var(--chart-1))" },
  { category: "NFT Purchases", amount: 2800, percentage: 22, fill: "hsl(var(--chart-2))" },
  { category: "Staking Rewards", amount: 1500, percentage: 12, fill: "hsl(var(--chart-3))" },
  { category: "Liquidity Provision", amount: 3200, percentage: 25, fill: "hsl(var(--chart-4))" },
  { category: "Gaming", amount: 800, percentage: 6, fill: "hsl(var(--chart-5))" },
]

const dailySpendingData = [
  { date: "Mon", amount: 1200, transactions: 8 },
  { date: "Tue", amount: 1500, transactions: 12 },
  { date: "Wed", amount: 900, transactions: 6 },
  { date: "Thu", amount: 2000, transactions: 15 },
  { date: "Fri", amount: 1800, transactions: 11 },
  { date: "Sat", amount: 2500, transactions: 18 },
  { date: "Sun", amount: 1000, transactions: 7 },
]

const topProtocols = [
  { name: "Sei DEX", volume: 15420, change: 12.5, transactions: 45 },
  { name: "Sei Swap", volume: 8930, change: -3.2, transactions: 28 },
  { name: "Sei Lend", volume: 6750, change: 8.7, transactions: 15 },
  { name: "Sei NFT", volume: 4200, change: 15.3, transactions: 12 },
]

const chartConfig = {
  amount: {
    label: "Amount (SEI)",
    color: "hsl(var(--chart-1))",
  },
  transactions: {
    label: "Transactions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function EnhancedSpendingPatterns() {
  return (
    <div className="space-y-6">
      {/* Top Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-sei-blue">
              <BarChart3 className="w-5 h-5 mr-2" />
              Spending by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={spendingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="category"
                    stroke="hsl(var(--muted-foreground))"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => value.split(" ")[0]}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-sei-blue">
              <LineChart className="w-5 h-5 mr-2" />
              Daily Spending Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={dailySpendingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "hsl(var(--chart-1))" }}
                    activeDot={{ r: 8, fill: "hsl(var(--chart-1))" }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Middle Row - Pie Chart */}
      <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <PieChart className="w-5 h-5 mr-2" />
            Spending Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={spendingData}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={5}
                  labelLine={false}
                  label={({ category, percentage }) => `${category}: ${percentage}%`}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Bottom Row - Protocol Analysis */}
      <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <TrendingUp className="w-5 h-5 mr-2" />
            Top Protocols by Volume
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProtocols.map((protocol, index) => (
              <div
                key={protocol.name}
                className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-sei-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{protocol.name}</div>
                    <div className="text-sm text-muted-foreground">{protocol.transactions} transactions</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sei-blue">{protocol.volume.toLocaleString()} SEI</div>
                  <div
                    className={`text-sm flex items-center ${protocol.change > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {protocol.change > 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {Math.abs(protocol.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
