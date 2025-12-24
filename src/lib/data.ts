export const schoolInfo = {
  name: "TK PKK SIWI LESTARI",
  rating: "⭐ 5.0 (3 ulasan)",
  category: "Kelompok Bermain / Taman Kanak-Kanak",
  address:
    "4CG2+542, Karet, Pleret, Kec. Pleret, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55791",
  mapUrl: "https://maps.app.goo.gl/2ya6sPjJqCMDCWMp8",
  hours: "Senin - Jumat, 07.00 - 11.00",
  phone: "+62 812-3456-7890",
  locationShort: "Karet, Pleret, Bantul",
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Guru", href: "/guru" },
  { label: "Galeri", href: "/galeri" },
  { label: "Pendaftaran", href: "/pendaftaran" },
  { label: "Kontak", href: "/kontak" },
];

export const features = [
  {
    title: "Pembelajaran Aktif & Menyenangkan",
    description:
      "Kegiatan eksploratif, seni, dan permainan edukatif yang membuat anak antusias belajar setiap hari.",
    icon: "sparkles",
  },
  {
    title: "Guru Peduli & Berpengalaman",
    description:
      "Tenaga pendidik yang sabar, hangat, dan fokus pada perkembangan karakter anak.",
    icon: "heart",
  },
  {
    title: "Lingkungan Aman & Nyaman",
    description:
      "Area bermain yang bersih, aman, dan dirancang untuk membangun rasa percaya diri.",
    icon: "shield-check",
  },
];

export const learningPoints = [
  "Kurikulum tematik yang menumbuhkan rasa ingin tahu.",
  "Kegiatan motorik, seni, dan bahasa yang seimbang.",
  "Kolaborasi aktif dengan orang tua setiap minggu.",
];

export const programs = [
  {
    title: "Kelas Bermain Ceria",
    age: "Usia 3-4 tahun",
    description:
      "Mengenal rutinitas sekolah, bermain bersama, dan membangun rasa percaya diri.",
    image: "/images/program-1.svg",
  },
  {
    title: "TK A Kreatif",
    age: "Usia 4-5 tahun",
    description:
      "Belajar sambil bermain dengan fokus pada literasi awal dan eksplorasi seni.",
    image: "/images/program-2.svg",
  },
  {
    title: "TK B Mandiri",
    age: "Usia 5-6 tahun",
    description:
      "Penguatan kesiapan sekolah dasar melalui proyek tematik dan kerja kelompok.",
    image: "/images/program-3.svg",
  },
];

export const testimonials = [
  {
    name: "Ibu Dian",
    role: "Orang tua murid",
    quote:
      "Anak saya jadi lebih percaya diri dan senang bercerita tentang kegiatan di sekolah.",
  },
  {
    name: "Bapak Agung",
    role: "Orang tua murid",
    quote:
      "Guru-gurunya sabar dan komunikatif. Kami merasa aman menitipkan anak di sini.",
  },
  {
    name: "Ibu Maya",
    role: "Orang tua murid",
    quote:
      "Kegiatan kreatifnya lengkap, anak jadi semangat belajar setiap pagi.",
  },
];

export const teachers = [
  {
    name: "Ibu Rini Astuti",
    role: "Kepala Sekolah",
    photo: "/images/teacher-1.svg",
  },
  {
    name: "Ibu Maya Kusuma",
    role: "Guru Kelas A",
    photo: "/images/teacher-2.svg",
  },
  {
    name: "Ibu Sari Lestari",
    role: "Guru Kelas B",
    photo: "/images/teacher-3.svg",
  },
  {
    name: "Ibu Dewi Puspita",
    role: "Guru Kreatif",
    photo: "/images/teacher-4.svg",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery-real-1.jpg",
    alt: "Kegiatan belajar di TK PKK Siwi Lestari",
  },
  {
    src: "/images/gallery-real-2.jpg",
    alt: "Suasana kelas TK PKK Siwi Lestari",
  },
  {
    src: "/images/gallery-real-3.jpg",
    alt: "Aktivitas anak di lingkungan sekolah",
  },
  {
    src: "/images/gallery-4.svg",
    alt: "Aktivitas bermain di luar ruangan",
  },
  {
    src: "/images/gallery-5.svg",
    alt: "Sesi bercerita bersama guru",
  },
  {
    src: "/images/gallery-6.svg",
    alt: "Kegiatan musik dan gerak",
  },
];

export const enrollmentSteps = [
  {
    step: "01",
    title: "Hubungi Admin",
    description:
      "Kirim pesan untuk mendapatkan informasi kelas, jadwal, dan kuota terbaru.",
  },
  {
    step: "02",
    title: "Isi Formulir",
    description:
      "Lengkapi data anak dan orang tua untuk proses pendaftaran awal.",
  },
  {
    step: "03",
    title: "Konfirmasi Jadwal",
    description:
      "Pilih jadwal kunjungan atau masa orientasi yang sesuai.",
  },
];

export const requirements = [
  "Fotokopi akta kelahiran anak",
  "Fotokopi Kartu Keluarga",
  "Pas foto anak ukuran 3x4 (2 lembar)",
  "Formulir pendaftaran yang telah diisi",
];

export const galleryStats = [
  { value: "8:1", label: "Rasio guru : siswa" },
  { value: "100%", label: "Area bermain ramah anak" },
  { value: "5.0", label: "Rating orang tua" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
] as const;
