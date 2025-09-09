"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    Wrench,
    CreditCard,
    ShoppingCart,
    Handshake,
    MoreHorizontal,
    Mail,
    User,
    Type,
    MessageSquare,
} from "lucide-react"
import { officeHours } from "./data"

type ContactFormProps = {
    isSubmitted: boolean
    isSubmitting: boolean
    handleSubmit: (e: React.FormEvent) => void
    handleInputChange: (field: string, value: string) => void
    formData: {
        name: string
        email: string
        phone: string
        subject: string
        category: string
        message: string
    }
}

const ContactForm = ({ isSubmitted, isSubmitting, handleSubmit, handleInputChange, formData }: ContactFormProps) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div id="contact-form">
                        <Card className="p-8 shadow-xl border border-border/50">
                            <CardHeader className="p-0 mb-8">
                                <CardTitle className="text-2xl font-heavy flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-primary" />
                                    پیام خود را ارسال کنید
                                </CardTitle>
                                <p className="text-muted-foreground">در کمتر از ۲ ساعت پاسخ شما را خواهیم داد</p>
                            </CardHeader>

                            <CardContent className="p-0">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-green-600 mb-2">پیام شما ارسال شد!</h3>
                                        <p className="text-muted-foreground">به زودی با شما تماس خواهیم گرفت</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="flex items-center gap-2">
                                                    <User className="w-4 h-4 text-muted-foreground" />
                                                    نام و نام خانوادگی *
                                                </Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    placeholder="نام خود را وارد کنید"
                                                    required
                                                    className="border border-gray-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                                    شماره تماس
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                                    className="border border-gray-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-muted-foreground" />
                                                ایمیل *
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                placeholder="example@domain.com"
                                                required
                                                className="border border-gray-300"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="category" className="flex items-center gap-2">
                                                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                                    دسته‌بندی
                                                </Label>
                                                <Select
                                                    value={formData.category}
                                                    onValueChange={(value) => handleInputChange("category", value)}
                                                    dir="rtl"
                                                >
                                                    <SelectTrigger className="text-right cursor-pointer border border-gray-300">
                                                        <SelectValue placeholder="انتخاب کنید" />
                                                    </SelectTrigger>
                                                    <SelectContent className="text-right">
                                                        <SelectItem value="technical" className="flex items-center gap-2 cursor-pointer">
                                                            <Wrench className="w-4 h-4 text-muted-foreground" />
                                                            مشکل فنی
                                                        </SelectItem>
                                                        <SelectItem value="billing" className="flex items-center gap-2 cursor-pointer">
                                                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                                                            مسائل مالی
                                                        </SelectItem>
                                                        <SelectItem value="sales" className="flex items-center gap-2 cursor-pointer">
                                                            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                                                            فروش و مشاوره
                                                        </SelectItem>
                                                        <SelectItem value="partnership" className="flex items-center gap-2 cursor-pointer">
                                                            <Handshake className="w-4 h-4 text-muted-foreground" />
                                                            همکاری
                                                        </SelectItem>
                                                        <SelectItem value="other" className="flex items-center gap-2 cursor-pointer">
                                                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                                            سایر
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject" className="flex items-center gap-2">
                                                    <Type className="w-4 h-4 text-muted-foreground" />
                                                    موضوع *
                                                </Label>
                                                <Input
                                                    id="subject"
                                                    value={formData.subject}
                                                    onChange={(e) => handleInputChange("subject", e.target.value)}
                                                    placeholder="موضوع پیام"
                                                    required
                                                    className="border border-gray-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                                پیام *
                                            </Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="پیام خود را اینجا بنویسید..."
                                                rows={5}
                                                required
                                                className="border border-gray-300"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-2"></div>
                                                    در حال ارسال...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 ml-2" />
                                                    ارسال پیام
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Office Info */}
                        <Card className="p-6 border border-border/50">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                    <MapPin className="w-6 h-6 text-primary ml-3" />
                                    <h3 className="text-xl font-bold">دفتر مرکزی</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    تهران، خیابان ولیعصر، برج میلاد، طبقه ۲۰
                                    <br />
                                    کد پستی: ۱۴۱۵۷-۳۳۱۱
                                </p>
                                <a
                                    href="https://www.google.com/maps/@35.7447679,51.3729263,17z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="sm" className="w-full cursor-pointer">
                                        مشاهده در نقشه
                                    </Button>
                                </a>

                            </CardContent>
                        </Card>

                        {/* Office Hours */}
                        <Card className="p-6 border border-border/50">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                    <Clock className="w-6 h-6 text-accent ml-3" />
                                    <h3 className="text-xl font-bold">ساعات کاری</h3>
                                </div>
                                <div className="space-y-2">
                                    {officeHours.map((schedule, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                                        >
                                            <span className="text-muted-foreground">{schedule.day}</span>
                                            <span className="font-medium">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                                    <div className="flex items-center justify-center gap-2 text-accent">
                                        <AlertCircle className="w-4 h-4" />
                                        <span className="text-sm font-medium">پشتیبانی ۲۴ ساعته آنلاین</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                    <AlertCircle className="w-6 h-6 text-red-600 ml-3" />
                                    <h3 className="text-xl font-bold text-red-800">تماس اضطراری</h3>
                                </div>
                                <p className="text-red-700 mb-4">
                                    در صورت بروز مشکل فوری در تراکنش‌ها یا امنیت حساب
                                </p>
                                <div className="flex justify-center">
                                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                                        <Phone className="w-4 h-4 ml-2" />
                                        ۰۲۱-۹۱۰۰۰۰۰۰
                                    </Button>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
