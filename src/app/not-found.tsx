"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center bg-gray-100 px-8 py-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl w-full relative"
            >
                {/* GIF 404 */}
                <motion.div
                    className="w-64 sm:w-96 mx-auto"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                    <img
                        src="/404.gif"
                        alt="404"
                        className="w-full h-auto"
                    />
                </motion.div>

                <p className="mt-6 text-2xl sm:text-3xl text-gray-700">
                    صفحه‌ای که دنبال آن هستید پیدا نشد.
                </p>
                <p className="mt-2 text-gray-500 text-lg sm:text-xl">
                    ممکن است URL اشتباه باشد یا صفحه حذف شده باشد.
                </p>

                <motion.div
                    className="mt-8 flex justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link
                        href="/"
                        className="px-6 py-3 bg-accent font-bold rounded-lg shadow-lg transition-colors text-center text-base sm:text-lg"
                    >
                        <span className="text-white text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                            بازگشت به صفحه اصلی
                        </span>
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
}
