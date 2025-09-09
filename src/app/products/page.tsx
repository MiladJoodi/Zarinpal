import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CreditCard,
} from "lucide-react"
import ProductsHero from "@/components/Products/ProductsHero"
import ProductsGrid from "@/components/Products/ProductsGrid"
import FeaturesComparison from "@/components/Products/FeaturesComparison"
import IntegrationSection from "@/components/Products/IntegrationSection"
import ProductsCTA from "@/components/Products/ProductsCTA"


export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductsGrid />
      <FeaturesComparison />
      <IntegrationSection />
      <ProductsCTA />
    </div>
  )
}
