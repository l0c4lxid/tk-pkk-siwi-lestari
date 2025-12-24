"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "sparkles" | "heart" | "shield-check";
}

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  "shield-check": ShieldCheck,
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-3xl bg-white p-6 shadow-lg shadow-primary/10 ring-1 ring-primary/10"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 h-1 w-12 rounded-full bg-primary/30 transition group-hover:w-20" />
    </motion.div>
  );
}
