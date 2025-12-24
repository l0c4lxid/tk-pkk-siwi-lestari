import Image from "next/image";

import BlobSection from "@/components/BlobSection";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import GalleryGrid from "@/components/GalleryGrid";
import HeroKid from "@/components/HeroKid";
import ProgramCard from "@/components/ProgramCard";
import TeacherCard from "@/components/TeacherCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  features,
  learningPoints,
  programs,
  teachers,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroKid />

      <BlobSection id="fitur" className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Fitur Utama</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Lingkungan belajar ceria dan aman
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Kami memastikan setiap anak mendapatkan perhatian, kasih sayang,
              dan kegiatan yang seimbang setiap hari.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon as "sparkles" | "heart" | "shield-check"}
              />
            ))}
          </div>
        </div>
      </BlobSection>

      <BlobSection id="tentang" className="bg-white" variant="right">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-sm font-semibold text-primary">Tentang Kami</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
              Belajar dengan hati, tumbuh dengan percaya diri
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              TK PKK Siwi Lestari menghadirkan pengalaman belajar yang hangat
              dan menyenangkan dengan pendekatan tematik yang menumbuhkan rasa
              ingin tahu anak.
            </p>
            <div className="mt-6 space-y-3">
              {learningPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-sky px-4 py-3 text-sm text-slate-600"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-[1fr_0.9fr] gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[32px] bg-sky p-4">
                <Image
                  src="/images/gallery-real-1.jpg"
                  alt="Kegiatan belajar di TK PKK Siwi Lestari"
                  width={320}
                  height={260}
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] bg-sky p-4">
                <Image
                  src="/images/gallery-real-2.jpg"
                  alt="Suasana kelas TK PKK Siwi Lestari"
                  width={320}
                  height={260}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="overflow-hidden rounded-[40px] bg-primary/10 p-4">
                <Image
                  src="/images/gallery-real-3.jpg"
                  alt="Aktivitas anak di lingkungan sekolah"
                  width={320}
                  height={420}
                  className="w-full"
                />
              </div>
            </div>
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-primary/10" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 70C120 40 240 40 360 70C480 100 600 100 720 70C840 40 960 40 1080 70C1200 100 1320 100 1440 70V120H0V70Z"
              fill="#EFF6FF"
            />
          </svg>
        </div>
      </BlobSection>

      <BlobSection id="program" className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">
                Program Kelas
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Kelas yang disusun sesuai usia anak
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Setiap kelas dirancang untuk mendukung perkembangan motorik,
              bahasa, sosial, dan kreativitas anak.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </BlobSection>

      <BlobSection id="guru" className="bg-white" variant="right">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Guru Kami</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Pengajar yang hangat dan profesional
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Guru-guru kami mendampingi setiap anak dengan empati dan
              perhatian.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.name} {...teacher} />
            ))}
          </div>
        </div>
      </BlobSection>

      <BlobSection id="testimoni" className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Testimoni</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Cerita bahagia dari orang tua
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Kepercayaan orang tua adalah motivasi utama kami.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </BlobSection>

      <BlobSection id="galeri" className="bg-white" variant="right">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Galeri</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                Aktivitas penuh warna di sekolah
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Dokumentasi momen belajar, bermain, dan berkarya bersama.
            </p>
          </div>

          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </BlobSection>

      <div className="bg-sky py-16 md:py-20">
        <CTASection />
      </div>
    </>
  );
}
