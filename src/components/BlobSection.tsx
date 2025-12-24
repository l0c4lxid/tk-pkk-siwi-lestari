"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "left" | "right";
  withBlobs?: boolean;
}

export default function BlobSection({
  id,
  className,
  children,
  variant = "left",
  withBlobs = true,
}: BlobSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn("relative overflow-hidden py-16 md:py-20", className)}
    >
      {withBlobs ? (
        <>
          <div
            className={cn(
              "pointer-events-none absolute -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl",
              variant === "left" ? "-left-24" : "-right-24"
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 h-72 w-72 rounded-full bg-primary-soft/20 blur-3xl",
              variant === "left" ? "right-10" : "left-10"
            )}
          />
        </>
      ) : null}
      {children}
    </motion.section>
  );
}
