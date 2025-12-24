import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

import { navLinks, schoolInfo, socialLinks } from "@/lib/data";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="mt-20 bg-sky">
      <div className="rounded-t-[48px] bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-sm">
              <p className="text-2xl font-semibold text-primary">
                {schoolInfo.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sekolah yang menghadirkan pengalaman belajar aman, ceria, dan
                penuh kasih untuk anak usia dini di Pleret.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = socialIcons[item.icon];
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-primary transition hover:-translate-y-0.5"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3 text-sm text-slate-600">
              <p className="text-base font-semibold text-slate-900">Menu</p>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 rounded-3xl bg-sky px-5 py-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <p className="text-sm leading-6 text-slate-600">
                  {schoolInfo.address}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-5 w-5 text-primary" />
                {schoolInfo.phone}
              </div>
              <Link
                href={schoolInfo.mapUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Lihat di Google Maps
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 md:flex-row">
            <p>© 2024 {schoolInfo.name}. Semua hak dilindungi.</p>
            <p>{schoolInfo.category}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
