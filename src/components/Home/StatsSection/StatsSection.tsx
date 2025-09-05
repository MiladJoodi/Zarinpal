"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/data";
import StatCard from "../StatCard";

const StatsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r bg-background/80 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-heavy mb-4 bg-gradient-to-r text-primary bg-clip-text">
                        قدرت اعداد، زیبایی نتایج
                    </h2>
                    <p className="text-xl text-primary">هر عدد، داستانی از موفقیت مشترک</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;