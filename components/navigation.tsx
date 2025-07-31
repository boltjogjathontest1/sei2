"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Wallet, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useWallet } from "@/hooks/use-wallet" // Import the new hook
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const { address, isConnected, connectWallet, disconnectWallet, isLoading } = useWallet()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <div className="w-8 h-8 bg-sei-gradient rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">SeiScout</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="/analysis"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            Analysis
          </Link>
          <Link
            href="/opportunities"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            Opportunities
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <Button variant="ghost" size="sm" disabled>
              Connecting...
            </Button>
          ) : isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Wallet className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {address?.substring(0, 6)}...{address?.substring(address.length - 4)}
                  </span>
                  <span className="sm:hidden">{address?.substring(0, 4)}...</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={disconnectWallet}>Disconnect</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={connectWallet} className="bg-sei-blue hover:bg-sei-blue/90 text-white">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
