"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wallet,
  Search,
  BarChart3,
  Shield,
  Zap,
  Eye,
  Brain,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Activity,
} from "lucide-react"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const [walletAddress, setWalletAddress] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (walletAddress.trim()) {
      router.push(`/dashboard?addr=${walletAddress}`)
    }
  }

  const handleDemoWallet = (demoAddr: string) => {
    setWalletAddress(demoAddr)
    router.push(`/dashboard?addr=${demoAddr}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sei-blue/5 via-background to-sei-blue/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--sei-blue)/0.1),transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sei-blue/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sei-blue-light/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main Hero Content */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <Badge className="bg-sei-blue/10 text-sei-blue border-sei-blue/20 px-4 py-2 text-sm font-medium animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Wallet Intelligence
            </Badge>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="bg-sei-gradient bg-clip-text text-transparent animate-gradient">SeiScout</span>
              <br />
              <span className="text-foreground">AI Wallet Radar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock deep insights into Sei Network wallet activities with lightning-fast AI analytics.
              <br />
              <span className="text-sei-blue font-semibold">Insight &lt; 3s • Alert &lt; 1s</span>
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-card/50 glass-effect rounded-2xl border shadow-2xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Enter Sei wallet address..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-2 focus-visible:ring-sei-blue"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="h-14 px-8 bg-sei-gradient hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Analyze Wallet
                </Button>
              </div>

              {/* Demo Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => handleDemoWallet("sei1whale_demo_address")}
                  className="border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white transition-all duration-300"
                >
                  🐋 Demo Whale
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDemoWallet("sei1defi_demo_address")}
                  className="border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white transition-all duration-300"
                >
                  ⚡ DeFi Trader
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDemoWallet("sei1nft_demo_address")}
                  className="border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white transition-all duration-300"
                >
                  🎨 NFT Collector
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-sei-blue">1.2M+</div>
                <div className="text-sm text-muted-foreground">Wallets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sei-blue">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sei-blue">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sei-blue">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-sei-blue">SeiScout</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI-powered analytics designed specifically for the Sei Network ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">AI-Powered Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced machine learning algorithms analyze wallet patterns, predict trends, and identify
                  opportunities in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get comprehensive wallet analysis in under 3 seconds and receive critical alerts in less than 1
                  second.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Risk Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced risk scoring and anomaly detection to protect your investments and identify suspicious
                  activities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Deep Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive spending patterns, investment strategies, and portfolio optimization recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Real-time Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 wallet monitoring with instant notifications for significant activities and market movements.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sei-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Sei Native</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built specifically for Sei Network with deep integration and understanding of the ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sei-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Unlock Wallet Intelligence?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of traders and investors using SeiScout to stay ahead in the Sei Network ecosystem.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-16 px-12 bg-white text-sei-blue hover:bg-white/90 text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Wallet className="w-6 h-6 mr-3" />
              Start Analyzing Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-sei-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-sei-blue">SeiScout</span>
          </div>
          <p className="text-muted-foreground mb-2">
            &copy; {new Date().getFullYear()} SeiScout. Built with ❤️ for the Sei Network.
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Hackathon Project</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
