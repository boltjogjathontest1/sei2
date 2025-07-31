"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Star, ExternalLink, Activity } from "lucide-react"
import { useState } from "react"

interface WalletHeaderProps {
  address: string
  label: string
  lastActive: string
  isMonitoring: boolean
  onToggleMonitoring: () => void
}

export default function WalletHeader({
  address,
  label,
  lastActive,
  isMonitoring,
  onToggleMonitoring,
}: WalletHeaderProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="bg-gradient-to-r from-sei-blue/5 via-background to-sei-blue/5 border-sei-blue/20 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
          <Activity className="w-4 h-4 mr-2 text-sei-blue" />
          Wallet Analysis
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-muted-foreground hover:text-sei-blue hover:bg-sei-blue/10 transition-all duration-300"
          >
            <Copy className="h-4 w-4 mr-1" />
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-sei-blue hover:bg-sei-blue/10 transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Explorer
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-3xl font-bold text-sei-blue font-mono break-all">{address}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge className="bg-sei-blue/10 text-sei-blue border-sei-blue/20 px-3 py-1 font-semibold">{label}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Last Active: {lastActive}
              </div>
            </div>
            <Button
              onClick={onToggleMonitoring}
              className={`transition-all duration-300 hover:scale-105 font-semibold ${
                isMonitoring
                  ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
                  : "bg-sei-gradient hover:opacity-90 text-white shadow-lg"
              }`}
            >
              <Star className={`w-4 h-4 mr-2 ${isMonitoring ? "fill-current" : ""}`} />
              {isMonitoring ? "Monitoring" : "Add to Watchlist"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
