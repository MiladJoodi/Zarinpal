import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    Users,
    Target,
    Award,
    Heart,
    Lightbulb,
    Eye,
    ArrowLeft,
    MapPin,
    Calendar,
    Linkedin,
    Twitter,
    Mail,
} from "lucide-react"
import { teamMembers, companyValues, companyMilestones, stats } from "@/lib/data"
import HeroSection from "@/components/About/HeroSection"
import MissionSection from "@/components/About/MissionSection"
import CompanyValues from "@/components/About/CompanyValues"

export default function AboutPage() {
    return (
        <div className="min-h-screen">

            <HeroSection />
            <MissionSection />
            <CompanyValues />

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-heavy mb-4">سفر ما</h2>
                        <p className="text-lg text-muted-foreground">نگاهی به مهم‌ترین دستاوردهای زرین‌پال در طول سال‌ها</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

                            <div className="space-y-12">
                                {companyMilestones.map((milestone, index) => (
                                    <div key={index} className="relative flex items-center gap-8">
                                        {/* Timeline Dot */}
                                        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                                            <Calendar className="w-6 h-6" />
                                        </div>

                                        {/* Content */}
                                        <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300">
                                            <CardContent className="p-0">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <Badge className="bg-primary/10 text-primary border-primary/20">{milestone.year}</Badge>
                                                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-20 bg-gradient-to-br from-muted/50 to-card">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-heavy mb-4">تیم ما</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            متخصصان با تجربه‌ای که با تلاش شبانه‌روزی، زرین‌پال را به پیشرو صنعت تبدیل کرده‌اند
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="relative">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.position}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                                    <div className="flex gap-3">
                                        <Link
                                            href={member.linkedin}
                                            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4 text-primary" />
                                        </Link>
                                        <Link
                                            href={member.twitter}
                                            className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                                        >
                                            <Twitter className="w-4 h-4 text-accent" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Office Location */}
            {/* <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-heavy mb-4">
                                    دفتر مرکزی
                                    <br />
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
                                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                                    تماس با ما
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">دفتر مرکزی زرین‌پال</h3>
                                    <p className="text-muted-foreground">تهران، ایران</p>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-bounce delay-500"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-bounce delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            {/* <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary">
                    <div className="absolute inset-0 bg-[url('/images/circuit.svg')] opacity-10"></div>
                </div>

                <div className="relative z-10 py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-heavy mb-6">آماده همکاری با ما هستید؟</h2>
                        <p className="text-xl mb-8 opacity-90">بیایید با هم آینده پرداخت را بسازیم</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register">
                                <Button
                                    size="lg"
                                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-4"
                                >
                                    شروع همکاری
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4"
                                >
                                    تماس با ما
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    )
}
