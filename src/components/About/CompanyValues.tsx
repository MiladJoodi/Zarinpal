"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Award, Eye } from "lucide-react";
import { companyValues } from "@/lib/data";
import { motion } from "framer-motion";

const valueIcons = {
  "🤝": Heart,
  "💡": Lightbulb,
  "⭐": Award,
  "🔍": Eye,
};

const CompanyValues = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-foreground">
            ارزش‌های ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اصول و ارزش‌هایی که راهنمای تمام تصمیمات و فعالیت‌های ما در زرین‌پال هستند
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value) => {
            const IconComponent =
              valueIcons[value.icon as keyof typeof valueIcons] || Heart;

            return (
              <motion.div
                key={value.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 rounded-2xl bg-accent/5 min-h-[300px] flex flex-col justify-between">
                  <CardContent className="p-0 flex flex-col h-full justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-accent/10">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
 