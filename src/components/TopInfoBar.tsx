import { Clock, MapPin, Phone } from "lucide-react";

import { schoolInfo } from "@/lib/data";

export default function TopInfoBar() {
  return (
    <div className="bg-sky py-3">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full bg-white px-4 py-3 text-xs text-slate-600 shadow-sm ring-1 ring-primary/10">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{schoolInfo.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{schoolInfo.locationShort}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>{schoolInfo.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
