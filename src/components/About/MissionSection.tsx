import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

const MissionSection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                        <CardContent className="p-0">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ml-4">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-heavy text-primary">ماموریت ما</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                تسهیل و امن‌سازی پرداخت‌های آنلاین برای تمام کسب‌وکارهای ایرانی و کمک به رشد اقتصاد دیجیتال کشور. ما
                                معتقدیم که هر کسب‌وکاری، صرف‌نظر از اندازه، باید به ابزارهای پیشرفته پرداخت دسترسی داشته باشد.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-accent/5 to-primary/5">
                        <CardContent className="p-0">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center ml-4">
                                    <Eye className="w-6 h-6 text-accent" />
                                </div>
                                <h2 className="text-2xl font-heavy text-accent">چشم‌انداز ما</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                تبدیل شدن به پیشرو منطقه‌ای در حوزه فناوری‌های پرداخت و مالی، و ایجاد اکوسیستمی که در آن هر فرد و
                                کسب‌وکاری بتواند به راحتی و امنیت کامل، تراکنش‌های مالی خود را انجام دهد.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;