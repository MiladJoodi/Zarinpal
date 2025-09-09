import { Card, CardContent } from "../ui/card";
import { features } from "./data";

const FeaturesComparison = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-muted/50 to-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">چرا زرین‌پال انتخاب اول است؟</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        مزایای منحصربه‌فرد که زرین‌پال را از سایر ارائه‌دهندگان متمایز می‌کند
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-2xl font-heavy text-primary mb-2">{item.stat}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesComparison;