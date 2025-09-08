"use client"

import { motion } from "framer-motion"
import { Headphones, Shield, TrendingUp } from "lucide-react"

const trustItems = [
    {
        icon: Shield,
        title: "امنیت تضمینی",
        desc: "استانداردهای بین‌المللی امنیت PCI DSS",
        gradient: "from-accent/40 via-accent/20 to-accent/5",
        iconColor: "text-accent",
    },
    {
        icon: TrendingUp,
        title: "رشد تضمینی",
        desc: "افزایش ۳۰٪ فروش با استفاده از زرین‌پال",
        gradient: "from-primary/40 via-primary/20 to-primary/5",
        iconColor: "text-primary",
    },
    {
        icon: Headphones,
        title: "پشتیبانی عالی",
        desc: "پشتیبانی ۲۴/۷ با تیم متخصص فارسی‌زبان",
        gradient: "from-green-400/40 via-green-400/20 to-green-400/5",
        iconColor: "text-green-600",
    },
]

const TrustIndicators = () => {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* fancy background */}
            <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-card/50 bg-[url('/images/grid.png')] opacity-10">
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {trustItems.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={i}
                                className="group relative rounded-3xl p-10 bg-card/90 backdrop-blur-xl border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                                variants={{
                                    hidden: { opacity: 0, y: 60 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                {/* glowing icon */}
                                <div
                                    className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <Icon className={`w-12 h-12 ${item.iconColor} animate-pulse`} />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {item.desc}
                                </p>

                                {/* animated glow under card */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default TrustIndicators
