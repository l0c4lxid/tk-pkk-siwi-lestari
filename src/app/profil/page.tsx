import type { Metadata } from "next";
import Image from "next/image";

import BlobSection from "@/components/BlobSection";
import CTASection from "@/components/CTASection";
import { schoolInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Profil TK PKK Siwi Lestari, visi, misi, dan pendekatan belajar yang ramah anak.",
};

export default function ProfilPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
          <p className="text-sm font-semibold text-primary">Profil Sekolah</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            Mengenal {schoolInfo.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Kami membangun ruang belajar yang hangat, kreatif, dan aman untuk
            anak usia dini di Pleret, Bantul.
          </p>
        </div>
      </section>

      <BlobSection className="bg-sky" withBlobs={false}>
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Sejarah Singkat</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              TK PKK Siwi Lestari lahir dari semangat komunitas untuk menghadirkan
              pendidikan anak usia dini yang berkualitas. Sejak awal, kami fokus
              pada pembelajaran yang menyenangkan dan kolaborasi erat dengan orang tua.
            </p>
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-slate-600">
                Kami terus mengembangkan metode belajar, fasilitas, dan layanan
                agar setiap anak merasa nyaman dan percaya diri.
              </p>
            </div>
          </div>
          <div className="rounded-[36px] bg-white p-6 shadow-lg">
            <Image
              src="/images/gallery-real-1.jpg"
              alt="Kegiatan belajar di TK PKK Siwi Lestari"
              width={520}
              height={420}
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </BlobSection>

      <BlobSection variant="right" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="rounded-3xl bg-sky p-6">
            <h3 className="text-xl font-semibold text-slate-900">Visi</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Menjadi taman kanak-kanak yang menumbuhkan anak cerdas, berkarakter,
              dan siap bersosialisasi dengan penuh percaya diri.
            </p>
          </div>
          <div className="rounded-3xl bg-sky p-6">
            <h3 className="text-xl font-semibold text-slate-900">Misi</h3>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              <li>Menciptakan pembelajaran aktif, kreatif, dan menyenangkan.</li>
              <li>Menumbuhkan nilai religius, sopan santun, dan empati.</li>
              <li>Membangun sinergi erat antara sekolah dan keluarga.</li>
            </ul>
          </div>
        </div>
      </BlobSection>

      <section className="bg-sky py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-primary px-8 py-10 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Nilai utama
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Aman, Ceria, dan Penuh Kepedulian
              </h2>
              <p className="mt-3 text-sm text-white/80">
                Kami memastikan setiap anak merasa dicintai dan dihargai selama
                proses belajar.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Hangat", "Kreatif", "Peduli", "Kolaboratif"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16">
        <CTASection />
      </div>
    </>
  );
}
