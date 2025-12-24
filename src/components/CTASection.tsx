"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto w-full max-w-6xl px-4 md:px-6"
    >
      <div className="relative overflow-hidden rounded-[36px] bg-primary px-8 py-12 text-white shadow-2xl shadow-primary/30">
        <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Yuk bergabung
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Siap melihat anak tumbuh dengan bahagia?
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Jadwalkan kunjungan atau hubungi admin untuk informasi lengkap.
            </p>
          </div>
          <Link
            href="/pendaftaran"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "bg-white text-primary"
            )}
          >
            <PhoneCall className="h-5 w-5" />
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
