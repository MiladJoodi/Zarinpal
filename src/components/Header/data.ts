import { Zap, Star, Globe, Shield, Users, Sparkles } from "lucide-react"

export const products = [
  {
    title: "درگاه پرداخت",
    description: "مهندسی شده برای فروش بیشتر",
    icon: Zap, // اینجا خود component رو قرار بده
    color: "from-blue-500 to-cyan-500",
    href: "/products",
  },
  {
    title: "زرین کارت",
    description: "طلایی ترین کارت بانکی",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
    href: "/products",
  },
  {
    title: "زرین لینک",
    description: "فروش آنلاین بدون وب‌سایت",
    icon: Globe,
    color: "from-emerald-500 to-green-500",
    href: "/products",
  },
  {
    title: "امنیت پلاس",
    description: "حفاظت پیشرفته از تراکنش‌ها",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    href: "/products",
  },
]

export const links = [
  { href: "/pricing", label: "تعرفه‌ها", icon: Users },
  { href: "/about", label: "درباره ما", icon: Star },
  { href: "/contact", label: "تماس با ما", icon: Globe },
]