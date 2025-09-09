"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    HelpCircle,
} from "lucide-react"
import { useState } from "react"
import Hero from "@/components/Contact/Hero"
import ContactMethods from "@/components/Contact/ContactMethods"
import ContactForm from "@/components/Contact/ContactForm"
import SupportCategories from "@/components/Contact/SupportCategories"
import FAQPreview from "@/components/Contact/FAQPreview"


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                category: "",
                message: "",
            })
        }, 3000)
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <div className="min-h-screen">
            <Hero />
            <ContactMethods />
            <ContactForm
                isSubmitted={isSubmitted}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                formData={formData}
            />
            <SupportCategories />
            <FAQPreview />
        </div>
    )
}
