import type { Metadata } from "next";

import BlobSection from "@/components/BlobSection";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guru",
  description:
    "Kenali guru-guru TK PKK Siwi Lestari yang hangat dan berpengalaman.",
};

export default function GuruPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
          <p className="text-sm font-semibold text-primary">Tim Pengajar</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            Guru yang hangat dan penuh perhatian
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Guru-guru kami mendampingi setiap anak dengan pendekatan yang ramah
            dan penuh empati agar belajar terasa menyenangkan.
          </p>
        </div>
      </section>

      <BlobSection className="bg-sky" withBlobs={false}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </BlobSection>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="rounded-3xl bg-sky p-8 text-center">
            <p className="text-sm font-semibold text-primary">Komitmen Kami</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Setiap guru adalah sahabat belajar anak
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Pendekatan individual, komunikasi terbuka dengan orang tua, dan
              suasana kelas yang ceria menjadi prioritas utama.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-sky py-16">
        <CTASection />
      </div>
    </>
  );
}
