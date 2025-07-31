"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap, Wallet } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/analysis", label: "Analysis" },
    { href: "/opportunities", label: "Opportunities" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0C101A]/95 backdrop-blur-md border-b border-[#1A202C]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sei-blue rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#0C101A]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-sei-blue">SeiScout</span>
              <span className="text-xs text-gray-400 -mt-1">AI Wallet Radar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-sei-blue" : "text-[#F7FAFC] hover:text-sei-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-sei-blue text-sei-blue hover:bg-sei-blue hover:text-[#0C101A] bg-transparent"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0C101A] border-[#1A202C]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition-colors ${
                      pathname === item.href ? "text-sei-blue" : "text-[#F7FAFC] hover:text-sei-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-sei-blue hover:bg-sei-blue/90 text-[#0C101A] mt-8">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
