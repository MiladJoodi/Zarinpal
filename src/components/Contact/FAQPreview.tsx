"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { faqs } from "./data"
import { HelpCircle } from "lucide-react"

const FAQPreview = () => {
    const [visibleCount, setVisibleCount] = useState(4) // تعداد اولیه نمایش داده شده
    const [loading, setLoading] = useState(false)

    const handleLoadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setVisibleCount(faqs.length)
            setLoading(false)
        }, 1000)
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <HelpCircle className="w-5 h-5" />
                        <span className="font-medium">سوالات متداول</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">
                        پاسخ سریع به رایج‌ترین سوالات
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.slice(0, visibleCount).map((faq, index) => (
                            <AccordionItem
                                key={faq.id}
                                value={`faq-${index}`}
                                className="border rounded-2xl shadow-sm overflow-hidden"
                            >
                                <AccordionTrigger className="px-6 py-4 text-right text-lg hover:bg-muted/30 cursor-pointer">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {visibleCount < faqs.length && (
                        <div className="flex justify-center items-center text-center mt-8">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleLoadMore}
                                disabled={loading}
                                className="flex items-center justify-center gap-2 cursor-pointer"
                            >
                                مشاهده همه سوالات
                                {loading ? (
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                ) : null}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FAQPreview
