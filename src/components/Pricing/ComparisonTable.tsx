import { CheckCircle, X } from "lucide-react";
import { allFeatures } from "./data";


const ComparisonTable = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-muted/50 to-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">مقایسه کامل پلن‌ها</h2>
                    <p className="text-lg text-muted-foreground">تمام ویژگی‌ها و امکانات در یک نگاه</p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px] bg-card rounded-2xl shadow-xl border overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                            <div className="p-6 font-bold text-lg">ویژگی‌ها</div>
                            <div className="p-6 text-center font-bold">استارتاپ</div>
                            <div className="p-6 text-center font-bold text-accent">حرفه‌ای</div>
                            <div className="p-6 text-center font-bold">سازمانی</div>
                        </div>

                        {/* Features */}
                        {allFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-4 border-b border-border/50 ${index % 2 === 0 ? "bg-muted/20" : "bg-card"
                                    }`}
                            >
                                <div className="p-4 font-medium flex items-center gap-2">
                                    <feature.icon className="w-5 h-5 text-primary/70" />
                                    {feature.name}
                                </div>
                                <div className="p-4 text-center">
                                    {typeof feature.startup === "boolean" ? (
                                        feature.startup ? (
                                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-sm">{feature.startup}</span>
                                    )}
                                </div>
                                <div className="p-4 text-center">
                                    {typeof feature.professional === "boolean" ? (
                                        feature.professional ? (
                                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-sm font-medium text-accent">{feature.professional}</span>
                                    )}
                                </div>
                                <div className="p-4 text-center">
                                    {typeof feature.enterprise === "boolean" ? (
                                        feature.enterprise ? (
                                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-sm">{feature.enterprise}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComparisonTable;