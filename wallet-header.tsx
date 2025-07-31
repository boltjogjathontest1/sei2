"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Star } from "lucide-react"
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
    <Card className="bg-card border-border mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Wallet Address</CardTitle>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="text-muted-foreground hover:text-sei-blue">
          <Copy className="h-4 w-4 mr-1" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-sei-blue mb-2 flex items-center">
          <span className="font-mono truncate">{address}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-sei-blue text-sei-blue">
              {label}
            </Badge>
            <span>Last Active: {lastActive}</span>
          </div>
          <Button
            size="sm"
            onClick={onToggleMonitoring}
            className={`
              ${
                isMonitoring ? "bg-green-500 hover:bg-green-600" : "bg-sei-blue hover:bg-sei-blue/90"
              } text-primary-foreground
            `}
          >
            {isMonitoring ? (
              <>
                <Star className="w-4 h-4 mr-1" />
                Monitoring
              </>
            ) : (
              <>
                <Star className="w-4 h-4 mr-1" />
                Add to Watchlist
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
