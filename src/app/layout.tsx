import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"

// فقط فونت فارسی
const vazirmatn = Vazirmatn({
  subsets: ["arabic"], // برای فارسی
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "زرین‌پال | ارائه دهنده خدمات درگاه پرداخت اینترنتی",
  description:
    "زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی",
  generator: "Milad Joodi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
