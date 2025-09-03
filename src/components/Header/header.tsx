"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ChevronDown, Sparkles, Zap, Shield, Users, ArrowRight, Globe, Star, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { links, products } from "./data"
import { useTheme } from "next-themes"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center select-none">
            <motion.img
              src={theme === "dark" ? "logo/logo-white.svg" : "logo/logo-black.svg"}
              alt="زرین‌پال"
              className="h-8 w-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

{/* Desktop Navigation */}
        <DesktopNav links={links} products={products} />
          

{/* Left Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-primary hover:bg-muted font-medium cursor-pointer">
                  زرین‌پال من
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/register">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-4 h-4 ml-2" />
                  ثبت نام
                </Button>
              </Link>
            </motion.div>
          </div>

{/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

{/* Mobile Navigation */}
        <AnimatePresence>
                    {isMenuOpen && <MobileNav links={links} products={products} setIsMenuOpen={setIsMenuOpen} />}

        </AnimatePresence>
      </div>
    </header>
  )
}
