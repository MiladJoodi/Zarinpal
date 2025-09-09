import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { productIcons, products } from "./data";

const ProductsGrid = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {products.map((product, index) => {
                        const IconComponent = productIcons[product.id as keyof typeof productIcons] || CreditCard

                        return (
                            <Card
                                key={product.id}
                                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <CardHeader className="relative z-10 pb-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <Badge className="bg-accent/10 text-accent border-accent/20">محصول پیشرفته</Badge>
                                    </div>

                                    <CardTitle className="text-2xl lg:text-3xl font-heavy text-primary group-hover:text-primary/90 transition-colors">
                                        {product.title}
                                    </CardTitle>

                                    <p className="text-lg font-bold text-foreground/80 mt-2">{product.subtitle}</p>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-6">
                                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 p-6">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            className="w-full max-w-xs mx-auto group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-foreground">ویژگی‌های کلیدی:</h4>
                                        <ul className="space-y-2">
                                            {product.features?.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div>
                                            <p className="text-sm text-muted-foreground">قیمت</p>
                                            <p className="text-lg font-bold text-primary">{product.price}</p>
                                        </div>

                                        <div className="flex gap-3">
                                            <Link href="/register">
                                                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 group/btn">
                                                    شروع کنید
                                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                            <Link href="/contact">
                                                <Button variant="outline" className="group/btn bg-transparent">
                                                    اطلاعات بیشتر
                                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductsGrid;