"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { schoolInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function HeroKid() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_55%)]" />
      <motion.div
        className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-10 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:pb-20 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            {schoolInfo.rating}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            TK PKK Siwi Lestari
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Tempat Bermain, Belajar, dan Tumbuh Bersama
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/pendaftaran"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Daftar Sekarang
            </Link>
            <Link
              href="#program"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" })
              )}
            >
              Lihat Program
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Kelas kecil & nyaman", "Kegiatan kreatif harian"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-sky px-4 py-3 text-xs font-semibold text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/images/hero-child.svg"
              alt="Ilustrasi anak belajar dengan gembira"
              width={520}
              height={520}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full max-w-[260px] sm:max-w-sm md:max-w-md"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60C120 20 240 20 360 60C480 100 600 100 720 60C840 20 960 20 1080 60C1200 100 1320 100 1440 60V120H0V60Z"
            fill="#EFF6FF"
          />
        </svg>
      </div>
    </section>
  );
}
