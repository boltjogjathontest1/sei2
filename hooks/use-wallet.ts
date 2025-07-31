"use client"

import { useState, useEffect, useCallback } from "react"
import { toast } from "@/components/ui/use-toast"

interface WalletState {
  address: string | null
  isConnected: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  isLoading: boolean
}

export function useWallet(): WalletState {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const SEI_CHAIN_ID = "atlantic-2" // Or your specific Sei chain ID

  const getKeplr = useCallback(async () => {
    if (typeof window !== "undefined" && window.keplr) {
      return window.keplr
    }

    if (document.readyState === "complete") {
      return window.keplr
    }

    return new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
        if (document.readyState === "complete") {
          resolve(window.keplr)
          document.removeEventListener("readystatechange", documentStateChange)
        }
      }

      document.addEventListener("readystatechange", documentStateChange)
    })
  }, [])

  const connectWallet = useCallback(async () => {
    setIsLoading(true)
    try {
      const keplr = await getKeplr()
      if (!keplr) {
        toast({
          title: "Keplr Wallet Not Found",
          description: "Please install Keplr Wallet browser extension.",
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      // Request to enable the Sei chain
      await keplr.enable(SEI_CHAIN_ID)

      const offlineSigner = keplr.getOfflineSigner(SEI_CHAIN_ID)
      const accounts = await offlineSigner.getAccounts()

      if (accounts.length > 0) {
        setAddress(accounts[0].address)
        setIsConnected(true)
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].address.substring(0, 10)}...`,
        })
      } else {
        setAddress(null)
        setIsConnected(false)
        toast({
          title: "Connection Failed",
          description: "No accounts found in Keplr.",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      console.error("Failed to connect wallet:", error)
      toast({
        title: "Wallet Connection Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      })
      setAddress(null)
      setIsConnected(false)
    } finally {
      setIsLoading(false)
    }
  }, [getKeplr])

  const disconnectWallet = useCallback(() => {
    setAddress(null)
    setIsConnected(false)
    toast({
      title: "Wallet Disconnected",
      description: "You have successfully disconnected your wallet.",
    })
  }, [])

  useEffect(() => {
    // Attempt to connect on mount if Keplr is already available
    const checkInitialConnection = async () => {
      setIsLoading(true)
      try {
        const keplr = await getKeplr()
        if (keplr) {
          // Check if Keplr is already connected to our chain
          const chainInfo = await keplr.getChainInfos()
          const seiChain = chainInfo.find((info) => info.chainId === SEI_CHAIN_ID)
          if (seiChain) {
            const offlineSigner = keplr.getOfflineSigner(SEI_CHAIN_ID)
            const accounts = await offlineSigner.getAccounts()
            if (accounts.length > 0) {
              setAddress(accounts[0].address)
              setIsConnected(true)
            }
          }
        }
      } catch (error) {
        console.error("Error checking initial Keplr connection:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkInitialConnection()

    // Listen for account changes
    const keplrAccountChangeListener = () => {
      connectWallet() // Re-connect if account changes
    }

    if (typeof window !== "undefined" && window.keplr) {
      window.addEventListener("keplr_keystorechange", keplrAccountChangeListener)
    }

    return () => {
      if (typeof window !== "undefined" && window.keplr) {
        window.removeEventListener("keplr_keystorechange", keplrAccountChangeListener)
      }
    }
  }, [connectWallet, getKeplr])

  return { address, isConnected, connectWallet, disconnectWallet, isLoading }
}

// Extend the Window interface to include Keplr
declare global {
  interface Window {
    keplr: any // You might want to use a more specific type from @keplr-wallet/types
  }
}
