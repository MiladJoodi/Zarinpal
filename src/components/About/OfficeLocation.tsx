import Link from "next/link"
import { ArrowLeft, Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"

const OfficeLocation = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-heavy mb-4">
                                دفتر مرکزی
                                {" "}
                                <span className="text-primary">زرین‌پال</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                دفتر مرکزی ما در قلب تهران قرار دارد و تیم ما آماده ارائه بهترین خدمات به شما هستند.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold">آدرس</h4>
                                    <p className="text-muted-foreground">تهران، خیابان ولیعصر، برج میلاد، طبقه ۲۰</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold">ایمیل</h4>
                                    <p className="text-muted-foreground">info@zarinpal.com</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact">
                            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 group cursor-pointer">
                                تماس با ما
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                        {/* Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12912.345678901234!2d51.3755012!3d35.7447636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sir"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Info Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 flex flex-col items-center shadow-neu hover:scale-105 transition-transform duration-300 border border-white/30">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 animate-ping-slow">
                            </div>
                        </div>

                        {/* Soft animated circles */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse delay-200"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OfficeLocation;