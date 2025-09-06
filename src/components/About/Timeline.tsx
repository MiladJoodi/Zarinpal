"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { companyMilestones } from "@/lib/data"

const Timeline = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">سفر ما</h2>
                    <p className="text-lg text-muted-foreground">نگاهی به مهم‌ترین دستاوردهای زرین‌پال در طول سال‌ها</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-10"></div>

                        <div className="space-y-12">
                            {companyMilestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-center gap-8">
                                    {/* Timeline Dot */}
                                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br to-accent flex items-center justify-center text-white font-bold shadow-lg">
                                        <Calendar className="w-6 h-6 text-black/50" />
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
    );
}

export default Timeline;