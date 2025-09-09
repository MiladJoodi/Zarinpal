"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Rocket, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl font-heavy mb-2 text-white">
            ورود به حساب کاربری
          </h1>
          <p className="text-white/70">اطلاعات خود را وارد کنید تا وارد شوید</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    ایمیل
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@domain.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2 relative">
                  <Label htmlFor="password" className="text-white font-medium">
                    رمز عبور
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="رمز عبور خود را وارد کنید"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-[40px] transform -translate-y-1/2 text-white/50 hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Remember me & forgot password */}
                <div className="flex items-center justify-between text-white/80">
                  <div className="flex items-center gap-2 space-x-reverse">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-white/80">
                      مرا به خاطر بسپار
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-emerald-400 hover:underline text-sm">
                    فراموشی رمز عبور؟
                  </Link>
                </div>

                {/* Login Button */}
                {/* Login Button */}
<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  <Button
    type="submit"
    size="lg"
    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white text-lg py-4 rounded-2xl group cursor-pointer shadow-md hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2"
    disabled={isSubmitting}
  >
    {isSubmitting ? "در حال ورود..." : (
      <>
        <Rocket className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
        ورود
      </>
    )}
  </Button>
</motion.div>

{/* Demo Button */}
<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
  <Link href="/dashboard">
    <Button
      type="button"
      size="lg"
      className="w-full bg-white/10 hover:bg-white/20 text-white text-lg py-4 rounded-2xl shadow-md transition-all duration-300 cursor-pointer border border-white/20 flex items-center justify-center gap-2 hover:shadow-white/10"
    >
      <Zap className="w-5 h-5" />
      نسخه دمو
    </Button>
  </Link>
</motion.div>


                {/* Register link */}
                <div className="text-center pt-4 border-t border-white/20">
                  <p className="text-white/70">
                    حساب کاربری ندارید؟{" "}
                    <Link href="/register" className="text-emerald-400 hover:underline font-medium">
                      ثبت نام کنید
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
