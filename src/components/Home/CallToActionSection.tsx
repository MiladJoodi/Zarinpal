import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Rocket, Sparkles, PlayCircle, FileX2, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                <div className="absolute inset-0 bg-[url('/images/circuit.png')] opacity-10"></div>
            </div>

            <div className="relative z-10 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        className="max-w-4xl mx-auto space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-400/30 text-lg px-8 py-3 cursor-pointer select-none">
                            <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                            آینده امروز شروع می‌شود
                        </Badge>

                        <h2 className="text-5xl lg:text-7xl font-heavy leading-tight select-none">
                            آماده‌اید تا
                            {" "}
                            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                تاریخ بسازید؟
                            </span>
                        </h2>

                        <p className="text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed select-none">
                            هر روز هزاران کسب‌وکار با زرین‌پال آینده‌شان را می‌سازند
                        </p>

                        <motion.div className="pt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/register">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold text-2xl px-16 py-8 rounded-3xl group cursor-pointer shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 select-none"
                                >
                                    <Rocket className="w-8 h-8 ml-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                                    شروع انقلاب
                                    <ArrowLeft className="w-8 h-8 mr-4 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap justify-center items-center gap-4 text-base opacity-80 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                <PlayCircle className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
                                <span>رایگان شروع کنید</span>
                            </div>

                            <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                <FileX2 className="w-4 h-4 text-sky-400 transition-transform group-hover:scale-110" />
                                <span>بدون تعهد</span>
                            </div>

                            <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                <LifeBuoy className="w-4 h-4 text-purple-400 transition-transform group-hover:scale-110" />
                                <span>پشتیبانی ۲۴/۷</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionSection;