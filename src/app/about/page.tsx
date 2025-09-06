import HeroSection from "@/components/About/HeroSection"
import MissionSection from "@/components/About/MissionSection"
import CompanyValues from "@/components/About/CompanyValues"
import Timeline from "@/components/About/Timeline"
import TeamSection from "@/components/About/TeamSection"
import OfficeLocation from "@/components/About/OfficeLocation"
import CTASection from "@/components/About/CTASection"

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <MissionSection />
            <CompanyValues />
            <Timeline />
            <TeamSection />
            <OfficeLocation />
            <CTASection />
        </div>
    )
}
