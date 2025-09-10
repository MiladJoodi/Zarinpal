import { Star, Zap } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductsHero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-white py-20 lg:py-28">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-lg px-6 py-2">
                        <Star className="w-5 h-5 ml-2" />
                        محصولات پیشرفته زرین‌پال
                    </Badge>

                    <h1 className="text-4xl lg:text-6xl font-heavy mb-6 text-balance leading-tight">
                        ابزارهای قدرتمند
                        {" "}
                        <span className="text-accent">برای رشد کسب‌وکار</span>
                    </h1>

                    <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-pretty opacity-90 max-w-4xl mx-auto">
                        مجموعه کاملی از راه‌کارهای پرداخت و مالی که هر کسب‌وکاری برای موفقیت و رشد پایدار به آن نیاز دارد
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 group cursor-pointer"
                            >
                                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                                شروع رایگان
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4 cursor-pointer"
                            >
                                مشاوره رایگان
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsHero;