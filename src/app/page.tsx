"use client"

import Header from "@/components/Header/header";
import Image from "next/image";
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Globe, Rocket, Shield, Sparkles, Star, TrendingUp, Zap, PlayCircle, FileX2, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";
import Typewriter from "@/components/typewriter";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import CallToActionSection from "@/components/Home/CallToActionSection";


export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <CallToActionSection />
    </div>
  );
}
