"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, GitBranch, Code, Globe, Activity, Users, Coins } from "lucide-react"

const networkStats = [
  { label: "Current Block Height", value: "12,345,678", change: "+1,234" },
  { label: "Average Block Time", value: "0.5 seconds", change: "Optimal" },
  { label: "Total Transactions (24h)", value: "1.2M", change: "+15.3%" },
  { label: "Active Validators", value: "100", change: "Stable" },
  { label: "Network TVL", value: "$847M", change: "+8.7%" },
  { label: "Staking Ratio", value: "68.4%", change: "+2.1%" },
]

const ecosystemProjects = [
  {
    name: "Sei DEX",
    category: "DEX",
    tvl: "$245M",
    volume24h: "$12.4M",
    description: "Leading decentralized exchange on Sei Network",
    status: "Active",
  },
  {
    name: "Sei Lend",
    category: "Lending",
    tvl: "$89M",
    volume24h: "$3.2M",
    description: "Decentralized lending and borrowing protocol",
    status: "Active",
  },
  {
    name: "Sei NFT",
    category: "NFT",
    tvl: "$23M",
    volume24h: "$890K",
    description: "Premier NFT marketplace for Sei ecosystem",
    status: "Active",
  },
  {
    name: "Sei Stake",
    category: "Staking",
    tvl: "$156M",
    volume24h: "$5.7M",
    description: "Liquid staking solution for SEI tokens",
    status: "Active",
  },
]

const developerResources = [
  { name: "Sei Documentation", description: "Complete developer documentation and guides", icon: Code },
  { name: "Sei GitHub", description: "Official Sei Network repositories and code", icon: GitBranch },
  { name: "Sei SDK", description: "Software development kits and libraries", icon: Zap },
  { name: "Sei Testnet Faucet", description: "Get testnet tokens for development", icon: Coins },
]

export default function EnhancedSeiIntegration() {
  return (
    <div className="space-y-6">
      {/* Network Status */}
      <Card className="bg-gradient-to-r from-sei-blue/5 via-background to-sei-blue/5 border-sei-blue/20 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <Activity className="w-5 h-5 mr-2" />
            Sei Network Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {networkStats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-sei-blue mb-2">{stat.value}</div>
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
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button className="bg-sei-gradient hover:opacity-90 text-white font-semibold">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Sei Explorer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ecosystem Projects */}
      <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <Globe className="w-5 h-5 mr-2" />
            Sei Ecosystem Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ecosystemProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground text-lg">{project.name}</h4>
                      <Badge className="bg-sei-blue/10 text-sei-blue border-sei-blue/20">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground">TVL</div>
                    <div className="font-bold text-sei-blue">{project.tvl}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">24h Volume</div>
                    <div className="font-bold text-sei-blue">{project.volume24h}</div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white transition-all duration-300 group-hover:scale-105 bg-transparent"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Visit Protocol
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Developer Resources */}
      <Card className="bg-card/50 glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-sei-blue">
            <Code className="w-5 h-5 mr-2" />
            Developer Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {developerResources.map((resource, index) => (
              <div
                key={index}
                className="p-4 bg-background/50 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-sei-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{resource.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white transition-all duration-300 bg-transparent"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Access Resource
                </Button>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-sei-blue/5 to-sei-blue/10 rounded-xl border border-sei-blue/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sei-gradient rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Join the Sei Developer Community</h4>
                <p className="text-muted-foreground mb-4">
                  Connect with other developers building on Sei Network. Get support, share ideas, and collaborate on
                  innovative projects.
                </p>
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-sei-gradient hover:opacity-90 text-white">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Discord
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-sei-blue/30 text-sei-blue hover:bg-sei-blue hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
