import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PlaceImage } from "./PlaceImage";
import LakeCurve from "./LakeCurve";

export default function PageIntro({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return <section className="sand-surface pb-8 pt-7 sm:pt-10">
    <div className="page-width"><nav aria-label="Fil d’Ariane" className="mb-7 flex items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:underline">Accueil</Link><ChevronRight size={13} /><span aria-current="page">{title}</span></nav></div>
    <div className="mx-auto grid max-w-[1600px] items-center gap-8 md:grid-cols-[0.9fr_1.2fr] md:gap-12">
      <div className="px-6 py-3 sm:px-10 sm:py-7 lg:pl-20 lg:pr-0"><p className="eyebrow">{eyebrow}</p><h1 className="section-title mt-4 italic">{title}</h1><div className="body-copy mt-5 max-w-lg">{children}</div><LakeCurve className="mt-6 text-primary/60" /></div>
      <div className="h-64 overflow-hidden rounded-l-[3rem] sm:h-80 md:h-[390px]"><PlaceImage terrace /></div>
    </div>
  </section>;
}
