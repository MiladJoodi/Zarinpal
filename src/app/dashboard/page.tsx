"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts"
import {
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  MoreHorizontal,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  Activity,
  Wallet,
} from "lucide-react"
import { motion } from "framer-motion"
import { dashboardData } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

const chartData = [
  { name: "فروردین", amount: 4000000, transactions: 1250, growth: 12 },
  { name: "اردیبهشت", amount: 3000000, transactions: 980, growth: -8 },
  { name: "خرداد", amount: 5000000, transactions: 1680, growth: 25 },
  { name: "تیر", amount: 4500000, transactions: 1420, growth: 15 },
  { name: "مرداد", amount: 6000000, transactions: 1890, growth: 33 },
  { name: "شهریور", amount: 5500000, transactions: 1750, growth: 18 },
]

const pieData = [
  { name: "موفق", value: 85, color: "#10b981" },
  { name: "ناموفق", value: 10, color: "#ef4444" },
  { name: "در انتظار", value: 5, color: "#f59e0b" },
]

const realtimeData = [
  { time: "09:00", value: 120 },
  { time: "10:00", value: 180 },
  { time: "11:00", value: 250 },
  { time: "12:00", value: 320 },
  { time: "13:00", value: 280 },
  { time: "14:00", value: 380 },
  { time: "15:00", value: 420 },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { theme } = useTheme()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fa-IR").format(amount) + " تومان"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "موفق":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 cursor-pointer">موفق</Badge>
      case "ناموفق":
        return <Badge className="bg-red-100 text-red-800 border-red-200 cursor-pointer">ناموفق</Badge>
      case "در انتظار":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200 cursor-pointer">در انتظار</Badge>
      default:
        return (
          <Badge variant="secondary" className="cursor-pointer">
            {status}
          </Badge>
        )
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "موفق":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case "ناموفق":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "در انتظار":
        return <Clock className="w-4 h-4 text-amber-600" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <motion.header
        className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/" className="flex items-center select-none">
                  <Image
                    src={theme === "dark" ? "/logo/logo-white.svg" : "/logo/logo-black.svg"}
                    alt="زرین‌پال"
                    width={120}
                    height={32}
                    className="cursor-pointer"
                  />
                </Link>              </motion.div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-heavy bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  داشبورد
                </h1>
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  خوش آمدید، علی رضایی
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.div className="relative hidden md:block" whileHover={{ scale: 1.02 }}>
                <Search className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="جستجو در تراکنش‌ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pr-10 bg-white/50 border-slate-200 focus:bg-white transition-all duration-300 cursor-text"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative cursor-pointer hover:bg-blue-50 transition-colors bg-transparent"
                >
                  <Bell className="h-4 w-4" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </Button>
              </motion.div>

              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full cursor-pointer">
                      <Avatar className="h-10 w-10 ring-2 ring-blue-100">
                        <AvatarImage src="/persian-tech-manager.png" alt="علی رضایی" />
                        <AvatarFallback className="bg-gray-500 text-white">
                          ع.ر
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">علی رضایی</p>
                      <p className="text-xs leading-none text-muted-foreground">ali@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="ml-2 h-4 w-4" />
                    <span>تنظیمات</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/" className="flex items-center w-full">
                      <LogOut className="ml-2 h-4 w-4" />
                      <span>خروج</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="mb-8 p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-3xl font-heavy mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  آمار لحظه‌ای
                </h2>
                <p className="text-blue-100 text-lg">عملکرد فوق‌العاده امروز شما</p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">۱۲۳</div>
                  <div className="text-sm text-blue-100">تراکنش فعال</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">۹۸٪</div>
                  <div className="text-sm text-blue-100">نرخ موفقیت</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-20 w-16 h-16 bg-white/10 rounded-full blur-xl"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "کل تراکنش‌ها",
              value: dashboardData.totalTransactions.toLocaleString("fa-IR"),
              change: "+۱۲٪",
              icon: CreditCard,
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-50",
              textColor: "text-blue-600",
            },
            {
              title: "تراکنش‌های موفق",
              value: dashboardData.successfulTransactions.toLocaleString("fa-IR"),
              change: "۹۵٪ نرخ موفقیت",
              icon: CheckCircle,
              color: "from-emerald-500 to-green-500",
              bgColor: "bg-emerald-50",
              textColor: "text-emerald-600",
            },
            {
              title: "کل درآمد",
              value: formatCurrency(dashboardData.totalRevenue),
              change: "+۱۸٪",
              icon: Wallet,
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-50",
              textColor: "text-purple-600",
            },
            {
              title: "رشد ماهانه",
              value: `+%${formatCurrency(dashboardData.monthlyGrowth)}`,
              change: "عملکرد عالی",
              icon: TrendingUp,
              color: "from-orange-500 to-red-500",
              bgColor: "bg-orange-50",
              textColor: "text-orange-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="cursor-pointer"
            >
              <Card
                className={`hover:shadow-2xl transition-all duration-300 border-0 ${stat.bgColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className={`text-3xl font-heavy ${stat.textColor} mb-1`}>{stat.value}</div>
                  <p className="text-xs text-slate-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3 text-emerald-500 ml-1" />
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                    نمودار درآمد ماهانه
                  </CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-700 cursor-pointer">
                    <TrendingUp className="w-4 h-4 ml-1" />
                    رشد ۲۵٪
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis
                      stroke="#64748b"
                      tickFormatter={(value) =>
                        new Intl.NumberFormat("fa-IR").format(value as number)
                      }
                    />
                    <Tooltip
                      formatter={(value) => [formatCurrency(value as number), "درآمد"]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fill="url(#colorAmount)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  وضعیت تراکنش‌ها
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${new Intl.NumberFormat("fa-IR").format(value as number)}%`, "درصد"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-4">
                  {pieData.map((entry, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                      <span className="text-sm font-medium">{entry.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                  <Activity className="w-6 h-6 text-indigo-600" />
                  فعالیت لحظه‌ای امروز
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  زنده
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={realtimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis
                    stroke="#64748b"
                    tickFormatter={(value) => new Intl.NumberFormat("fa-IR").format(value)}
                  />
                  <Tooltip
                    formatter={(value) => [`${new Intl.NumberFormat("fa-IR").format(value as number)} تراکنش`, "تعداد"]}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  تراکنش‌های اخیر
                </CardTitle>
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="cursor-pointer hover:bg-slate-50 bg-transparent">
                      <Filter className="h-4 w-4 ml-2" />
                      فیلتر
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="cursor-pointer hover:bg-slate-50 bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      خروجی
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-slate-50/50 text-right">
                      <TableHead className="font-bold text-right">شناسه</TableHead>
                      <TableHead className="font-bold text-right">مشتری</TableHead>
                      <TableHead className="font-bold text-right">مبلغ</TableHead>
                      <TableHead className="font-bold text-right">وضعیت</TableHead>
                      <TableHead className="font-bold text-right">تاریخ</TableHead>
                      <TableHead className="font-bold text-right">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboardData.recentTransactions.map((transaction, index) => (
                      <motion.tr
                        key={transaction.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-slate-50/50 transition-colors cursor-pointer"
                      >
                        <TableCell className="font-medium text-blue-600">#{transaction.id}</TableCell>
                        <TableCell className="font-medium">{transaction.customer}</TableCell>
                        <TableCell className="font-bold text-slate-700">{formatCurrency(transaction.amount)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(transaction.status)}
                            {getStatusBadge(transaction.status)}
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-600">{transaction.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </motion.div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="cursor-pointer">
                                <Eye className="ml-2 h-4 w-4" />
                                مشاهده جزئیات
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <Download className="ml-2 h-4 w-4" />
                                دانلود رسید
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="fixed bottom-8 left-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            className="rounded-full shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 cursor-pointer h-16 w-16 p-0"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
