"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/10"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Quote className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">“{quote}”</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </motion.div>
  );
}
