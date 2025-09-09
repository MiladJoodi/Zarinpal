import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { integrationFeatures } from "./data";

const IntegrationSection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <Badge className="bg-primary/10 text-primary border-primary/20">یکپارچه‌سازی آسان</Badge>

                        <h2 className="text-3xl lg:text-4xl font-heavy">
                            در کمتر از ۱۰ دقیقه
                            <br />
                            <span className="text-primary">راه‌اندازی کنید</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            با مستندات کامل، SDK های آماده و پشتیبانی فنی تخصصی، یکپارچه‌سازی زرین‌پال با سیستم شما بسیار ساده و سریع
                            است.
                        </p>

                        <ul className="space-y-4">
                            {integrationFeatures.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/register">
                                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">شروع کنید</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline">مشاهده مستندات</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-card rounded-2xl p-8 shadow-xl border">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-muted-foreground mr-4">terminal</span>
                                </div>

                                <div className="font-mono text-sm space-y-2">
                                    <div className="text-green-600">$ npm install zarinpal-sdk</div>
                                    <div className="text-muted-foreground">✓ Package installed successfully</div>
                                    <div className="text-green-600">$ zarinpal init</div>
                                    <div className="text-muted-foreground">✓ Configuration completed</div>
                                    <div className="text-green-600">$ zarinpal test</div>
                                    <div className="text-muted-foreground">✓ Connection successful</div>
                                    <div className="text-accent">Ready to accept payments! 🚀</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-bounce delay-500"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-bounce delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntegrationSection;