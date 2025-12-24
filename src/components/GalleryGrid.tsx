"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { galleryImages } from "@/lib/data";

export default function GalleryGrid() {
  return (
    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {galleryImages.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true, amount: 0.2 }}
          className="break-inside-avoid"
        >
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-primary/10">
            <Image
              src={image.src}
              alt={image.alt}
              width={520}
              height={520}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
