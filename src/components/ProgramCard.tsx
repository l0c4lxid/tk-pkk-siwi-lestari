"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  age: string;
  description: string;
  image: string;
}

export default function ProgramCard({ title, age, description, image }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-primary/10 ring-1 ring-primary/10"
    >
      <div className="relative h-44 w-full bg-sky">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex h-full flex-col p-6">
        <p className="text-xs font-semibold text-primary">{age}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-6">
          <Link
            href="/pendaftaran"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "inline-flex"
            )}
          >
            Lihat Detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
