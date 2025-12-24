"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, schoolInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navContainer =
  "rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-primary/5 ring-1 ring-primary/10 backdrop-blur";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-sky/80 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span className="text-lg font-bold">TK</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-primary">
                {schoolInfo.name}
              </p>
              <p className="text-xs text-slate-500">Sekolah Ramah Anak</p>
            </div>
          </div>

          <nav className={cn("hidden items-center gap-2 md:flex", navContainer)}>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 md:flex">
            <Link
              href="/pendaftaran"
              className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
            >
              Daftar Sekarang
            </Link>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md shadow-primary/10 ring-1 ring-primary/10 transition hover:-translate-y-0.5 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="px-4 pb-6 md:hidden"
          >
            <div className={cn("flex flex-col gap-3", navContainer)}>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-primary/10 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pendaftaran"
                className={cn(buttonVariants({ variant: "primary" }))}
                onClick={() => setOpen(false)}
              >
                Daftar Sekarang
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
