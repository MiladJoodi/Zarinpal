import { BarChart3, BookOpen, Building2, CalendarSearch, Code, CreditCard, Crown, Gift, Headphones, Link, Mail, Phone, ShieldCheck, Split, UserCheck, Wallet, Webhook, Zap } from "lucide-react"

export const pricingPlans = [
  {
    id: 1,
    name: "استارتاپ",
    price: "رایگان",
    description: "برای کسب‌وکارهای نوپا",
    features: ["تا ۱۰۰ تراکنش رایگان", "درگاه پرداخت پایه", "پشتیبانی ایمیلی", "گزارش‌گیری ساده"],
    popular: false,
  },
  {
    id: 2,
    name: "حرفه‌ای",
    price: "۲.۵٪",
    description: "برای کسب‌وکارهای متوسط",
    features: ["تراکنش‌های نامحدود", "تمام محصولات زرین‌پال", "پشتیبانی ۲۴/۷", "گزارش‌گیری پیشرفته", "API کامل"],
    popular: true,
  },
  {
    id: 3,
    name: "سازمانی",
    price: "قیمت ویژه",
    description: "برای سازمان‌های بزرگ",
    features: ["تمام امکانات حرفه‌ای", "مدیر حساب اختصاصی", "SLA تضمینی", "تنظیمات سفارشی", "آموزش و پیاده‌سازی"],
    popular: false,
  },
]

export const allFeatures = [
  { name: "تراکنش‌های ماهانه", icon: CalendarSearch, startup: "۱۰۰", professional: "نامحدود", enterprise: "نامحدود" },
  { name: "درگاه پرداخت", icon: CreditCard, startup: true, professional: true, enterprise: true },
  { name: "زرین‌لینک", icon: Link, startup: false, professional: true, enterprise: true },
  { name: "زرین‌کارت", icon: Wallet, startup: false, professional: true, enterprise: true },
  { name: "تسهیم", icon: Split, startup: false, professional: true, enterprise: true },
  { name: "زرین‌پلاس", icon: Gift, startup: false, professional: false, enterprise: true },
  { name: "API کامل", icon: Code, startup: false, professional: true, enterprise: true },
  { name: "وب‌هوک", icon: Webhook, startup: false, professional: true, enterprise: true },
  { name: "گزارش‌گیری پیشرفته", icon: BarChart3, startup: false, professional: true, enterprise: true },
  { name: "پشتیبانی ایمیلی", icon: Mail, startup: true, professional: true, enterprise: true },
  { name: "پشتیبانی تلفنی", icon: Phone, startup: false, professional: true, enterprise: true },
  { name: "پشتیبانی ۲۴/۷", icon: Headphones, startup: false, professional: false, enterprise: true },
  { name: "مدیر حساب اختصاصی", icon: UserCheck, startup: false, professional: false, enterprise: true },
  { name: "SLA تضمینی", icon: ShieldCheck, startup: false, professional: false, enterprise: true },
  { name: "آموزش و پیاده‌سازی", icon: BookOpen, startup: false, professional: false, enterprise: true },
]

export const faqs = [
    {
        question: "آیا می‌توانم پلن خود را تغییر دهم؟",
        answer: "بله، می‌توانید در هر زمان پلن خود را ارتقا یا کاهش دهید. تغییرات از ماه بعد اعمال می‌شود.",
    },
    {
        question: "آیا هزینه راه‌اندازی وجود دارد؟",
        answer: "خیر، هیچ هزینه راه‌اندازی یا مخفی وجود ندارد. فقط کارمزد تراکنش‌های موفق پرداخت می‌کنید.",
    },
    {
        question: "چگونه کارمزد محاسبه می‌شود؟",
        answer: "کارمزد فقط برای تراکنش‌های موفق محاسبه می‌شود. تراکنش‌های ناموفق هیچ هزینه‌ای ندارند.",
    },
    {
        question: "آیا تخفیف حجمی وجود دارد؟",
        answer: "بله، برای کسب‌وکارهای با حجم تراکنش بالا، تخفیف‌های ویژه‌ای در نظر گرفته شده است.",
    },
    {
        question: "چگونه می‌توانم لغو کنم؟",
        answer: "می‌توانید در هر زمان حساب خود را لغو کنید. هیچ جریمه یا هزینه لغو وجود ندارد.",
    },
    {
        question: "آیا دوره آزمایشی وجود دارد؟",
        answer: "پلن استارتاپ کاملاً رایگان است و می‌توانید تا ۱۰۰ تراکنش بدون هزینه تست کنید.",
    }
]

export const planIcons = {
    1: Zap,
    2: Crown,
    3: Building2,
}
