import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    Users,
    Mail,
} from "lucide-react"
import { stats } from "@/lib/data"

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-white py-20 lg:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-lg px-6 py-2">
                                <Users className="w-5 h-5 ml-2" />
                                درباره زرین‌پال
                            </Badge>

                            <h1 className="text-4xl lg:text-6xl font-heavy mb-6 text-balance leading-tight">
                                پیشگام پرداخت
                                {" "}
                                <span className="text-accent">در ایران</span>
                            </h1>

                            <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-pretty opacity-90">
                                از سال ۱۳۹۲، با هدف تسهیل و امن‌سازی پرداخت‌های آنلاین، در خدمت کسب‌وکارهای ایرانی هستیم
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <Link href="/products" className="flex-1 cursor-pointer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4 cursor-pointer"
                                    >
                                        محصولات ما
                                    </Button>
                                </Link>
                                <Link href="/contact" className="flex-1 cursor-pointer">
                                    <Button
                                        size="lg"
                                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 flex justify-center items-center cursor-pointer"
                                    >
                                        <Mail className="w-5 h-5 ml-2" />
                                        تماس با ما
                                    </Button>
                                </Link>
                            </div>

                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                        <CardContent className="p-0 text-center">
                                            <div className="text-2xl lg:text-3xl font-heavy text-accent mb-2">{stat.value}</div>
                                            <div className="text-sm opacity-90">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;