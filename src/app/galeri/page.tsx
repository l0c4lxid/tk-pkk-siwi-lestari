import type { Metadata } from "next";

import BlobSection from "@/components/BlobSection";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Lihat momen belajar ceria di TK PKK Siwi Lestari melalui galeri kegiatan.",
};

export default function GaleriPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
          <p className="text-sm font-semibold text-primary">Galeri</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            Momen ceria setiap hari
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Rekam jejak aktivitas belajar, bermain, dan tumbuh bersama di TK PKK
            Siwi Lestari.
          </p>
        </div>
      </section>

      <BlobSection className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <GalleryGrid />
        </div>
      </BlobSection>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {galleryStats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-sky p-6 text-center"
              >
                <p className="text-3xl font-semibold text-primary">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
