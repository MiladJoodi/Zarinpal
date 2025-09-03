import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Props {
  links: typeof import("./data").links
  products: typeof import("./data").products
}

export default function DesktopNav({ links, products }: Props) {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <motion.button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                whileHover={{ scale: 1.02 }}
              >
                محصولات
                <motion.div animate={{ rotate: isProductsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-96 bg-card rounded-2xl shadow-2xl border border-border p-6 grid grid-cols-2 gap-4"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {products.map((product, index) => (
                      <motion.div
                        key={product.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={product.href}
                          className="p-4 rounded-xl hover:bg-muted transition-all duration-300 block group cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${product.color} group-hover:scale-110 transition-transform`}
                            >
                              <product.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-card-foreground group-hover:text-primary transition-colors">
                                {product.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.02 }}>
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
  )
}
