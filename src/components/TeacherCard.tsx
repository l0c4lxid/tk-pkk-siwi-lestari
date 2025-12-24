import Image from "next/image";

interface TeacherCardProps {
  name: string;
  role: string;
  photo: string;
}

export default function TeacherCard({ name, role, photo }: TeacherCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-6 text-center shadow-lg shadow-primary/10 ring-1 ring-primary/10 transition hover:-translate-y-2">
      <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-sky">
        <Image src={photo} alt={name} width={120} height={120} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{role}</p>
      <div className="mt-6 h-1 w-12 rounded-full bg-primary/20 transition group-hover:w-20" />
    </div>
  );
}
