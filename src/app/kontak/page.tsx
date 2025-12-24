import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

import BlobSection from "@/components/BlobSection";
import { schoolInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Informasi kontak dan lokasi TK PKK Siwi Lestari di Pleret, Bantul.",
};

export default function KontakPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
          <p className="text-sm font-semibold text-primary">Kontak</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            Hubungi TK PKK Siwi Lestari
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Kami siap menyambut kunjungan orang tua dan menjawab pertanyaan
            seputar program sekolah.
          </p>
        </div>
      </section>

      <BlobSection className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Alamat Sekolah
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {schoolInfo.address}
              </p>
              <Link
                href={schoolInfo.mapUrl}
                className="mt-4 inline-flex text-sm font-semibold text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Buka di Google Maps
              </Link>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Rating Orang Tua
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {schoolInfo.rating}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Kepercayaan orang tua adalah prioritas utama kami.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Kontak Admin
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Hubungi kami untuk jadwal kunjungan, informasi kelas, dan biaya.
              </p>
              <Link
                href="https://wa.me/6281234567890"
                className="mt-4 inline-flex text-sm font-semibold text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Chat via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </BlobSection>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Peta lokasi TK PKK Siwi Lestari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046.800295603854!2d110.40006446007848!3d-7.87500099903344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570f6b39026b%3A0xe31d033289f89893!2sTK%20PKK%20SIWI%20LESTARI!5e0!3m2!1sid!2sid!4v1766580392274!5m2!1sid!2sid"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
