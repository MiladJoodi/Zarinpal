import Link from "next/link";
import {
    Instagram,
    Twitter,
    MessageCircle,
    Linkedin,
    Play,
    CreditCard,
    User,
    BookOpen,
    FileText,
    Shield,
    Code,
    Newspaper,
    PhoneCall,
} from "lucide-react";

import { footerLinks, socialLinks } from "./data";

// مپ آیکون‌ها برای رندر داینامیک
const iconMap = {
    Instagram,
    Twitter,
    MessageCircle,
    Linkedin,
    Play,
    CreditCard,
    User,
    BookOpen,
    FileText,
    Shield,
    Code,
    Newspaper,
    PhoneCall,
};

// تابع گرفتن آیکون از مپ
const getIcon = (name: keyof typeof iconMap, className = "w-4 h-4 text-muted-foreground") => {
    const Icon = iconMap[name];
    return Icon ? <Icon className={className} /> : null;
};

export default function Footer() {
    return (
        <footer className="bg-muted py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name} className="flex items-center gap-2">
                                        {getIcon(link.icon as keyof typeof iconMap)}
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">زرین‌پال در شبکه‌های اجتماعی</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-12 h-12 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    {getIcon(social.icon as keyof typeof iconMap, "w-5 h-5")}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-center md:text-right font-bold text-lg">
                        پشتیبانی ۲۴ ساعته، ۷ روز هفته | شماره تماس:
                        <span className="text-primary mr-2">۴۱۲۳۹-۰۲۱</span>
                    </p>
                    <Link
                        href="/support"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        درخواست پشتیبانی
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
                 {/* Copyright Section */}
                <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Milad Joodi. All rights reserved. | 
                    <Link href="https://www.linkedin.com/in/joodi/" className="text-primary hover:underline mx-1">
                        LinkedIn
                    </Link>
                    |
                    <Link href="https://github.com/MiladJoodi/Zarinpal" className="text-primary hover:underline mx-1">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
}
