import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const FAQPreview = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">سوالات متداول</h2>
                    <p className="text-lg text-muted-foreground">پاسخ سریع به رایج‌ترین سوالات</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            question: "چگونه حساب کاربری ایجاد کنم؟",
                            answer: "برای ایجاد حساب، روی دکمه 'ثبت نام' کلیک کنید و اطلاعات مورد نیاز را وارد کنید.",
                        },
                        {
                            question: "کارمزد تراکنش چقدر است؟",
                            answer: "کارمزد بر اساس نوع پلن شما متفاوت است. پلن استارتاپ رایگان و سایر پلن‌ها ۲.۵٪ کارمزد دارند.",
                        },
                        {
                            question: "چگونه درگاه پرداخت را راه‌اندازی کنم؟",
                            answer: "پس از تأیید حساب، می‌توانید از پنل کاربری، درگاه پرداخت را در کمتر از ۱۰ دقیقه راه‌اندازی کنید.",
                        },
                        {
                            question: "آیا امکان تست قبل از راه‌اندازی وجود دارد؟",
                            answer:
                                "بله، محیط تست کاملی برای آزمایش تمام قابلیت‌ها قبل از راه‌اندازی نهایی در اختیار شما قرار می‌گیرد.",
                        },
                    ].map((faq, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-primary" />
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                        مشاهده همه سوالات
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default FAQPreview;