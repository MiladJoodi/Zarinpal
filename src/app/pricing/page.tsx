"use client"

import { useState } from "react"
import Hero from "@/components/Pricing/Hero"
import PricingCards from "@/components/Pricing/PricingCard"
import ComparisonTable from "@/components/Pricing/ComparisonTable"
import FAQ from "@/components/Pricing/FAQ"
import TrustIndicators from "@/components/Pricing/TrustIndicators"
import CTA from "@/components/Pricing/CTA"

export default function PricingPage() {

    const [isAnnual, setIsAnnual] = useState(false)

    return (
        <div className="min-h-screen">
            <Hero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            <PricingCards isAnnual={isAnnual} />
            <ComparisonTable />
            <FAQ />
            <TrustIndicators />
            <CTA />
        </div>
    )
}
