"use client"

import { motion } from "framer-motion";

interface StatCardProps {
    stat: {
        value: string | number;
        label: string;
    };
    index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
    return (
        <motion.div
            key={index}
            className="group cursor-pointer perspective-1000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
        >
            <div className="relative h-54 preserve-3d group-hover:rotate-y-12 transition-all duration-700">
                <div className="absolute inset-0 bg-background rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">

                    {/* Pattern background */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                                backgroundSize: "20px 20px",
                            }}
                        ></div>
                    </div>

                    {/* Borders */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent opacity-40"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-600 to-transparent opacity-40"></div>

                    {/* Decorations */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-blue-200 opacity-60 animate-ping"></div>

                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                        <div className="mb-4 relative">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                                <div className="w-3 h-3 bg-white rounded-lg shadow-inner"></div>
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-blue-300/50 animate-ping"></div>
                        </div>

                        <div className="relative mb-3">
                            <div className="text-3xl lg:text-4xl font-black text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-blue-700 group-hover:bg-clip-text transition-all duration-500">
                                {stat.value}
                            </div>
                            <div className="absolute inset-0 text-4xl lg:text-5xl font-black text-blue-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {stat.value}
                            </div>
                        </div>

                        <div className="text-primary font-medium text-sm uppercase tracking-wider group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-blue-700 group-hover:bg-clip-text transition-all duration-500">
                            {stat.label}
                        </div>

                        <div className="mt-3 w-0 h-px bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-16 transition-all duration-500"></div>
                    </div>

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
                </div>

                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
        </motion.div>
    );
};

export default StatCard;