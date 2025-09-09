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

export const faqs = [
  {
    id: 1,
    question: "چگونه حساب کاربری ایجاد کنم؟",
    answer: "برای ایجاد حساب، روی دکمه 'ثبت نام' کلیک کنید و اطلاعات مورد نیاز را وارد کنید.",
  },
  {
    id: 2,
    question: "کارمزد تراکنش چقدر است؟",
    answer: "کارمزد بر اساس نوع پلن شما متفاوت است. پلن استارتاپ رایگان و سایر پلن‌ها ۲.۵٪ کارمزد دارند.",
  },
  {
    id: 3,
    question: "چگونه درگاه پرداخت را راه‌اندازی کنم؟",
    answer: "پس از تأیید حساب، می‌توانید از پنل کاربری، درگاه پرداخت را در کمتر از ۱۰ دقیقه راه‌اندازی کنید.",
  },
  {
    id: 4,
    question: "آیا امکان تست قبل از راه‌اندازی وجود دارد؟",
    answer: "بله، محیط تست کاملی برای آزمایش تمام قابلیت‌ها قبل از راه‌اندازی نهایی در اختیار شما قرار می‌گیرد.",
  },
  {
    id: 5,
    question: "آیا می‌توانم چند حساب کاربری داشته باشم؟",
    answer: "بله، هر کاربر می‌تواند چند حساب با ایمیل‌های مختلف ایجاد کند.",
  },
  {
    id: 6,
    question: "چگونه رمز عبورم را تغییر دهم؟",
    answer: "وارد پنل کاربری شوید، بخش تنظیمات، گزینه تغییر رمز عبور را انتخاب کنید.",
  },
  {
    id: 7,
    question: "آیا پشتیبانی تلفنی دارید؟",
    answer: "بله، پشتیبانی تلفنی ۲۴/۷ برای مشتریان فعال است.",
  },
  {
    id: 8,
    question: "چگونه می‌توانم حساب خود را حذف کنم؟",
    answer: "برای حذف حساب، از طریق پشتیبانی درخواست خود را ثبت کنید.",
  },
];