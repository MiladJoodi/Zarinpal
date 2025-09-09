import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { supportCategories } from "./data";

const SupportCategories = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-muted/50 to-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">مرکز راهنمایی</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        پاسخ سوالات خود را در مرکز راهنمایی جامع ما پیدا کنید
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportCategories.map((category, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <category.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                                <Badge variant="secondary" className="text-xs">
                                    {category.articles} مقاله
                                </Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SupportCategories;