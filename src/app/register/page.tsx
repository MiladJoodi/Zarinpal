"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Building, Eye, EyeOff, Shield, Zap, Users, Sparkles, Rocket, Star, Wrench, CreditCard, ShoppingCart, Handshake, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-5"></div>

        {/* Floating animated elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border-emerald-400/30 hover:bg-emerald-500/30 text-lg px-6 py-2 cursor-pointer">
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
              عضویت در خانواده زرین‌پال
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-heavy mb-4 text-white leading-tight">
              آماده شروع
              {" "}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                ماجراجویی هستید؟
              </span>
            </h1>
            <p className="text-xl text-white/80">در کمتر از ۵ دقیقه حساب خود را ایجاد کنید و شروع کنید</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: Zap, title: "راه‌اندازی سریع", desc: "کمتر از ۱۰ دقیقه", color: "from-yellow-400 to-orange-400" },
              { icon: Shield, title: "امنیت بالا", desc: "استاندارد بانکی", color: "from-emerald-400 to-blue-400" },
              { icon: Users, title: "پشتیبانی ۲۴/۷", desc: "همیشه در کنارتان", color: "from-purple-400 to-pink-400" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 group cursor-pointer hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-heavy text-white flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                  ایجاد حساب کاربری
                  <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                </CardTitle>
                <p className="text-white/70 text-lg">اطلاعات خود را وارد کنید</p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white font-medium">
                        نام *
                      </Label>
                      <div className="relative">
                        <User className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="نام خود را وارد کنید"
                          className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white font-medium">
                        نام خانوادگی *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="نام خانوادگی"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        ایمیل *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@domain.com"
                          className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white font-medium">
                        شماره موبایل *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-white font-medium">
                        نام کسب‌وکار *
                      </Label>
                      <div className="relative">
                        <Building className="absolute right-3 top-3 h-4 w-4 text-white/50" />
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange("businessName", e.target.value)}
                          placeholder="نام شرکت یا کسب‌وکار"
                          className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-white font-medium">
                        نوع کسب‌وکار
                      </Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleInputChange("businessType", value)}
                        dir="rtl"
                      >
                        <SelectTrigger className="text-right !text-white cursor-pointer border border-gray-300">
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
                  </div>

                  {/* Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white font-medium">
                        رمز عبور *
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          placeholder="حداقل ۸ کاراکتر"
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-3 top-3 text-white/50 hover:text-white cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white font-medium">
                        تکرار رمز عبور *
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        placeholder="تکرار رمز عبور"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 space-x-reverse">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        className="border-white/30 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-white/80">
                        با{" "}
                        <Link href="/terms" className="text-emerald-400 hover:underline cursor-pointer">
                          قوانین و مقررات
                        </Link>{" "}
                        و{" "}
                        <Link href="/privacy" className="text-emerald-400 hover:underline cursor-pointer">
                          حریم خصوصی
                        </Link>{" "}
                        موافقم *
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 space-x-reverse">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeToMarketing}
                        onCheckedChange={(checked) => handleInputChange("agreeToMarketing", checked as boolean)}
                        className="border-white/30 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                      />
                      <Label htmlFor="marketing" className="text-sm text-white/80">
                        از اخبار و پیشنهادات ویژه زرین‌پال مطلع شوم
                      </Label>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold text-lg py-6 rounded-2xl group cursor-pointer shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                      size="lg"
                      disabled={isSubmitting || !formData.agreeToTerms}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin ml-2"></div>
                          در حال ایجاد حساب...
                        </>
                      ) : (
                        <>
                          <Rocket className="w-6 h-6 ml-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                          شروع ماجراجویی
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Login Link */}
                  <div className="text-center pt-4 border-t border-white/20">
                    <p className="text-white/70">
                      قبلاً حساب دارید؟{" "}
                      <Link href="/dashboard" className="text-emerald-400 hover:underline font-medium cursor-pointer">
                        وارد شوید
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mt-8 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg">✨ با ثبت نام، به خانواده بیش از یک میلیون کسب‌وکار موفق می‌پیوندید ✨</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
