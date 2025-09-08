"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "./data"
import { HelpCircle } from "lucide-react"

const FAQ = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <HelpCircle className="w-5 h-5" />
                        <span className="font-medium">سوالات متداول</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heavy mb-4">
                        همه چیز درباره قیمت‌گذاری
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        پاسخ شفاف به سوالاتی که بیشتر پرسیده می‌شوند
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
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
                </div>
            </div>
        </section>
    )
}

export default FAQ
