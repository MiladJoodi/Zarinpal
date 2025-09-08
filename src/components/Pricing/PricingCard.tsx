import { ArrowLeft, CheckCircle, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { planIcons, pricingPlans } from "./data";

type PricingCardsProps = {
    isAnnual: boolean;
};

const PricingCards: React.FC<PricingCardsProps> = ({ isAnnual }) => {
    return (
        <section className="py-20 -mt-10 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => {
                        const IconComponent = planIcons[plan.id as keyof typeof planIcons] || Zap
                        const isPopular = plan.popular

                        return (
                            <Card
                                key={plan.id}
                                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${isPopular
                                    ? "border-accent shadow-xl scale-105 bg-gradient-to-br from-card to-accent/5"
                                    : "border-border hover:border-accent/50 bg-card"
                                    }`}
                            >
                                {isPopular && (
                                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-center py-2 text-sm font-bold">
                                        <Sparkles className="w-4 h-4 inline ml-1" />
                                        محبوب‌ترین انتخاب
                                    </div>
                                )}

                                <CardHeader className={`text-center ${isPopular ? "pt-12" : "pt-8"}`}>
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isPopular ? "bg-accent/20" : "bg-primary/10"
                                                }`}
                                        >
                                            <IconComponent className={`w-8 h-8 ${isPopular ? "text-accent" : "text-primary"}`} />
                                        </div>
                                    </div>

                                    <CardTitle className="text-2xl font-heavy mb-2">{plan.name}</CardTitle>
                                    <p className="text-muted-foreground mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <div className="text-4xl font-heavy text-primary mb-2">
                                            {plan.price === "رایگان" ? (
                                                "رایگان"
                                            ) : plan.price === "قیمت ویژه" ? (
                                                "تماس بگیرید"
                                            ) : (
                                                <>
                                                    {plan.price}
                                                    <span className="text-lg font-normal text-muted-foreground">
                                                        {isAnnual ? " / سال" : " / تراکنش"}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        {isAnnual && plan.price !== "رایگان" && plan.price !== "قیمت ویژه" && (
                                            <p className="text-sm text-accent">۲۰٪ تخفیف سالانه</p>
                                        )}
                                    </div>

                                    <Link href="/register" className="w-full">
                                        <Button
                                            className={`w-full cursor-pointer ${isPopular
                                                ? "bg-accent text-accent-foreground hover:bg-accent/90"
                                                : "bg-primary text-primary-foreground hover:bg-primary/90"
                                                }`}
                                            size="lg"
                                        >
                                            {plan.price === "قیمت ویژه" ? "تماس با فروش" : "شروع کنید"}
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                        </Button>
                                    </Link>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <h4 className="font-bold text-foreground mb-4">ویژگی‌ها:</h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm">
                                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default PricingCards;