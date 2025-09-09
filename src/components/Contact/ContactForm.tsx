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
    HelpCircle,
} from "lucide-react"
import { officeHours } from "./data"

type ContactFormProps = {
    isSubmitted: boolean;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    handleInputChange: (field: string, value: string) => void;
    formData: {
        name: string,
        email: string,
        phone: string,
        subject: string,
        category: string,
        message: string

    }
}

const ContactForm = ({ isSubmitted,isSubmitting, handleSubmit, handleInputChange, formData }: ContactFormProps) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div id="contact-form">
                        <Card className="p-8 shadow-xl">
                            <CardHeader className="p-0 mb-8">
                                <CardTitle className="text-2xl font-heavy">پیام خود را ارسال کنید</CardTitle>
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
                                                <Label htmlFor="name">نام و نام خانوادگی *</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    placeholder="نام خود را وارد کنید"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">شماره تماس</Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">ایمیل *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                placeholder="example@domain.com"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="category">دسته‌بندی</Label>
                                                <Select
                                                    value={formData.category}
                                                    onValueChange={(value) => handleInputChange("category", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="انتخاب کنید" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="technical">مشکل فنی</SelectItem>
                                                        <SelectItem value="billing">مسائل مالی</SelectItem>
                                                        <SelectItem value="sales">فروش و مشاوره</SelectItem>
                                                        <SelectItem value="partnership">همکاری</SelectItem>
                                                        <SelectItem value="other">سایر</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">موضوع *</Label>
                                                <Input
                                                    id="subject"
                                                    value={formData.subject}
                                                    onChange={(e) => handleInputChange("subject", e.target.value)}
                                                    placeholder="موضوع پیام"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">پیام *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="پیام خود را اینجا بنویسید..."
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
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
                        <Card className="p-6">
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
                                <Button variant="outline" size="sm">
                                    مشاهده در نقشه
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Office Hours */}
                        <Card className="p-6">
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
                                    <div className="flex items-center gap-2 text-accent">
                                        <AlertCircle className="w-4 h-4" />
                                        <span className="text-sm font-medium">پشتیبانی ۲۴ ساعته آنلاین</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                    <AlertCircle className="w-6 h-6 text-red-600 ml-3" />
                                    <h3 className="text-xl font-bold text-red-800">تماس اضطراری</h3>
                                </div>
                                <p className="text-red-700 mb-4">در صورت بروز مشکل فوری در تراکنش‌ها یا امنیت حساب</p>
                                <Button className="bg-red-600 hover:bg-red-700 text-white">
                                    <Phone className="w-4 h-4 ml-2" />
                                    ۰۲۱-۹۱۰۰۰۰۰۰
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;