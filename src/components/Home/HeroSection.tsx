import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import {  Globe, Rocket, Shield, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-15"></div>

                {/* Floating animated elements */}
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
                    animate={{
                        y: [0, 15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="w-full relative z-10 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-right">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Badge className="mb-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border-emerald-400/30 hover:bg-emerald-500/30 text-lg px-6 py-2 cursor-pointer select-none">
                                    <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                                    انقلاب در دنیای پرداخت دیجیتال
                                </Badge>
                            </motion.div>

                            <motion.h1
                                className="flex gap-3 text-5xl lg:text-7xl font-heavy mb-8 text-balance leading-tight select-none"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span>پرداخت</span>
                                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                                    بدون مرز
                                </span>
                            </motion.h1>

                            <motion.div className="text-xl lg:text-2xl leading-relaxed mb-12 text-pretty opacity-90 select-none"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Typewriter
                                    text="جایی که تکنولوژی با سادگی ملاقات می‌کند"
                                    speed={80}
                                    className="text-xl lg:text-2xl opacity-80 max-w-2xl leading-relaxed select-none"
                                />
                                <br />
                                <span className="text-emerald-300 font-bold">هر پرداخت، یک تجربه جادویی</span>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Link href="/register">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-xl px-12 py-6 rounded-2xl group cursor-pointer shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 select-none"
                                    >
                                        <Rocket className="w-6 h-6 ml-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                                        شروع ماجراجویی
                                    </Button>
                                </Link>
                                <Link href="/products">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-xl px-12 py-6 rounded-2xl group cursor-pointer hover:border-emerald-400/50 transition-all duration-300 select-none"
                                    >
                                        <Globe className="w-6 h-6 ml-3 group-hover:rotate-180 transition-transform duration-500" />
                                        کاوش محصولات
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm opacity-80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                    <Shield className="w-4 h-4 text-emerald-400" />
                                    <span>امنیت نظامی</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                    <span>سرعت نور</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 select-none">
                                    <TrendingUp className="w-4 h-4 text-blue-400" />
                                    <span>رشد تضمینی</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                                <div className="relative z-10 w-full h-auto max-w-lg mx-auto">
                                    <img src="/images/home.svg" alt="زرین‌پال - پرداخت بدون مرز" className="w-full h-auto rounded-3xl" />
                                </div>

                                <motion.div
                                    className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="flex items-center gap-2 text-white text-sm select-none">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span>پرداخت موفق</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, -3, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                >
                                    <div className="flex items-center gap-2 text-white text-sm select-none">
                                        <Star className="w-3 h-3 text-yellow-400 animate-spin" />
                                        <span>امتیاز ۵/۵</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;