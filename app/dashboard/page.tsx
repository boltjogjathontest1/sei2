"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WalletHeader from "@/components/wallet-header"
import EnhancedSpendingPatterns from "@/components/enhanced-spending-patterns"
import EnhancedInvestmentStrategy from "@/components/enhanced-investment-strategy"
import EnhancedSeiIntegration from "@/components/enhanced-sei-integration"
import EnhancedFlashAlerts from "@/components/enhanced-flash-alerts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, LinkIcon, Users } from "lucide-react"
import { useWallet } from "@/hooks/use-wallet" // Import the new hook
import Link from "next/link"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { address: connectedAddress, isConnected, isLoading, connectWallet } = useWallet()

  // Use the connected wallet address if available, otherwise fall back to URL param or a default
  const initialAddress = connectedAddress || searchParams.get("addr") || "sei1whale_demo_address"
  const [walletAddress, setWalletAddress] = useState(initialAddress)
  const [isMonitoring, setIsMonitoring] = useState(false) // Example state for monitoring

  useEffect(() => {
    if (!isLoading) {
      if (isConnected && connectedAddress) {
        setWalletAddress(connectedAddress)
      } else if (!searchParams.get("addr")) {
        // If no wallet connected and no address in URL, prompt to connect or use demo
        // Optionally redirect to landing page or show a modal
        // For now, we'll just use the demo address if no connection
        setWalletAddress("sei1whale_demo_address")
      }
    }
  }, [connectedAddress, isConnected, isLoading, searchParams])

  const handleToggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
    // In a real app, you'd send this to a backend service
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <p className="text-lg text-muted-foreground">Loading wallet data...</p>
      </div>
    )
  }

  if (!isConnected && !searchParams.get("addr")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 text-center">
        <h2 className="text-3xl font-bold mb-4">No Wallet Connected</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-md">
          Please connect your Sei wallet to view real-time analytics, or use a demo address.
        </p>
        <div className="flex gap-4">
          <Button onClick={connectWallet} className="bg-sei-blue hover:bg-sei-blue/90 text-white">
            Connect Sei Wallet
          </Button>
          <Link href="/dashboard?addr=sei1whale_demo_address" passHref>
            <Button variant="outline">Use Demo Wallet</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <WalletHeader
        address={walletAddress}
        label="Primary Wallet" // This would come from actual wallet data
        lastActive="2 minutes ago" // This would come from actual wallet data
        isMonitoring={isMonitoring}
        onToggleMonitoring={handleToggleMonitoring}
      />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5 h-12 bg-muted/50 border border-border rounded-lg overflow-hidden">
          <TabsTrigger
            value="overview"
            className="text-base font-semibold data-[state=active]:bg-sei-blue data-[state=active]:text-white transition-colors"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="spending"
            className="text-base font-semibold data-[state=active]:bg-sei-blue data-[state=active]:text-white transition-colors"
          >
            Spending Patterns
          </TabsTrigger>
          <TabsTrigger
            value="investment"
            className="text-base font-semibold data-[state=active]:bg-sei-blue data-[state=active]:text-white transition-colors"
          >
            Investment Strategy
          </TabsTrigger>
          <TabsTrigger
            value="sei-integration"
            className="text-base font-semibold data-[state=active]:bg-sei-blue data-[state=active]:text-white transition-colors"
          >
            Sei Integration
          </TabsTrigger>
          <TabsTrigger
            value="flash-alerts"
            className="text-base font-semibold data-[state=active]:bg-sei-blue data-[state=active]:text-white transition-colors"
          >
            Flash Alerts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-card/50 glass-effect border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Users className="w-5 h-5 mr-2 text-sei-blue" />
                  Related Wallets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover wallets with significant interactions or similar patterns to the current wallet.
                </p>
                <div className="space-y-3">
                  {[
                    { address: "sei1relatedwallet1...", label: "DeFi Power User", link: "#" },
                    { address: "sei1relatedwallet2...", label: "NFT Whale", link: "#" },
                    { address: "sei1relatedwallet3...", label: "Early Adopter", link: "#" },
                  ].map((wallet, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-background rounded-md border border-border"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-sm text-foreground truncate">{wallet.address}</span>
                        <span className="text-xs text-muted-foreground">{wallet.label}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={wallet.link}>
                          View <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 glass-effect border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2 text-sei-blue" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="flex items-center text-foreground hover:text-sei-blue transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" /> View on SeiScan
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-foreground hover:text-sei-blue transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" /> Transaction History
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-foreground hover:text-sei-blue transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" /> Portfolio Overview
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="spending" className="mt-6">
          <EnhancedSpendingPatterns />
        </TabsContent>

        <TabsContent value="investment" className="mt-6">
          <EnhancedInvestmentStrategy />
        </TabsContent>

        <TabsContent value="sei-integration" className="mt-6">
          <EnhancedSeiIntegration />
        </TabsContent>

        <TabsContent value="flash-alerts" className="mt-6">
          <EnhancedFlashAlerts />
        </TabsContent>
      </Tabs>
    </div>
  )
}
