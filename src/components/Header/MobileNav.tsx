import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme-toggle"

interface Props {
  links: typeof import("./data").links
  products: typeof import("./data").products
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ links, products, setIsMenuOpen }: Props) {
  return (
    <motion.div
              className="lg:hidden mt-6 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                <nav className="space-y-6">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <h3 className="text-lg font-bold text-foreground">منو</h3>
                    <ThemeToggle />
                  </div>

                  {/* Products section in mobile */}
                  <div>
                    <motion.h3
                      className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Sparkles className="w-5 h-5 text-primary" />
                      محصولات
                    </motion.h3>
                    <div className="grid grid-cols-1 gap-3">
                      {products.map((product, index) => {
                        const Icon = product.icon
                        return (
                          <motion.div
                            key={product.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                          >
                            <Link
                              href={product.href}
                              className="flex items-center gap-3 p-3 rounded-xl bg-background hover:bg-muted transition-all duration-300 group cursor-pointer"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div
                                className={`p-2 rounded-lg bg-gradient-to-r ${product.color} group-hover:scale-110 transition-transform`}
                              >
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {product.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">{product.description}</p>
                              </div>
                              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="space-y-3">
                      {links.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center justify-between gap-3 p-3 rounded-xl bg-background hover:bg-muted transition-all duration-300 group cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                {React.createElement(item.icon, {
                                  className: "w-4 h-4 text-muted-foreground group-hover:text-primary",
                                })}
                              </div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </span>
                            </div>
                            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant="ghost"
                          className="w-full text-primary hover:bg-muted font-medium justify-start cursor-pointer"
                        >
                          <Users className="w-4 h-4 ml-2" />
                          زرین‌پال من
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.65 }}
                    >
                      <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium cursor-pointer shadow-lg">
                          <Sparkles className="w-4 h-4 ml-2" />
                          ثبت نام
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </nav>
              </div>
            </motion.div>
  )
}
