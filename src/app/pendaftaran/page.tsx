import type { Metadata } from "next";
import Link from "next/link";

import BlobSection from "@/components/BlobSection";
import CTASection from "@/components/CTASection";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { enrollmentSteps, requirements } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pendaftaran",
  description:
    "Panduan pendaftaran TK PKK Siwi Lestari untuk orang tua dan calon siswa.",
};

export default function PendaftaranPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
          <p className="text-sm font-semibold text-primary">Pendaftaran</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            Langkah mudah untuk bergabung
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Kami siap membantu orang tua dalam proses pendaftaran yang ramah dan
            transparan.
          </p>
        </div>
      </section>

      <BlobSection className="bg-sky" withBlobs={false}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {enrollmentSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/10 ring-1 ring-primary/10"
              >
                <p className="text-sm font-semibold text-primary">{step.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlobSection>

      <BlobSection variant="right" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-sky p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Persyaratan Pendaftaran
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {requirements.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-primary px-6 py-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Hubungi kami
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Pendaftaran bisa via WhatsApp
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Admin kami siap membantu dan menjawab pertanyaan orang tua.
              </p>
              <Link
                href="https://wa.me/6281234567890"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "mt-6 w-full justify-center bg-white text-primary"
                )}
                target="_blank"
                rel="noreferrer"
              >
                Hubungi via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </BlobSection>

      <div className="bg-sky py-16">
        <CTASection />
      </div>
    </>
  );
}
