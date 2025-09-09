import { Headphones, Phone, Send } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-white py-20 lg:py-28">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-lg px-6 py-2">
                        <Headphones className="w-5 h-5 ml-2" />
                        پشتیبانی و تماس
                    </Badge>

                    <h1 className="text-4xl lg:text-6xl font-heavy mb-6 text-balance leading-tight">
                        در خدمت شما
                        <br />
                        <span className="text-accent">هستیم</span>
                    </h1>

                    <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-pretty opacity-90 max-w-4xl mx-auto">
                        تیم پشتیبانی ما آماده پاسخ‌گویی به سوالات شما و ارائه بهترین راه‌کارها است
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-4"
                            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Send className="w-5 h-5 ml-2" />
                            ارسال پیام
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4"
                        >
                            <Phone className="w-5 h-5 ml-2" />
                            تماس فوری
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;