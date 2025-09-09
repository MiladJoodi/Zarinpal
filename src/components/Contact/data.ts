import { BookOpen, FileText, HelpCircle, Mail, MessageCircle, Phone, Users, Video } from "lucide-react"

export const contactMethods = [
  {
    icon: Phone,
    title: "تماس تلفنی",
    description: "پشتیبانی ۲۴ ساعته",
    value: "۰۲۱-۹۱۰۰۰۰۰۰",
    action: "تماس بگیرید",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    title: "ایمیل",
    description: "پاسخ در کمتر از ۲ ساعت",
    value: "support@zarinpal.com",
    action: "ایمیل بفرستید",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "چت آنلاین",
    description: "پاسخ فوری",
    value: "در دسترس",
    action: "شروع چت",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Video,
    title: "جلسه آنلاین",
    description: "مشاوره تخصصی",
    value: "رزرو جلسه",
    action: "رزرو کنید",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export const supportCategories = [
  {
    icon: HelpCircle,
    title: "سوالات عمومی",
    description: "پاسخ سوالات متداول درباره خدمات",
    articles: 25,
  },
  {
    icon: FileText,
    title: "مستندات فنی",
    description: "راهنمای کامل API و یکپارچه‌سازی",
    articles: 40,
  },
  {
    icon: Users,
    title: "آموزش کاربران",
    description: "ویدیوها و راهنماهای گام به گام",
    articles: 15,
  },
  {
    icon: BookOpen,
    title: "وبلاگ",
    description: "آخرین اخبار و نکات کاربردی",
    articles: 60,
  },
]

export const officeHours = [
  { day: "شنبه تا چهارشنبه", hours: "۸:۰۰ - ۱۸:۰۰" },
  { day: "پنج‌شنبه", hours: "۸:۰۰ - ۱۳:۰۰" },
  { day: "جمعه", hours: "تعطیل" },
]