import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PlaceImage } from "./PlaceImage";

export default function PageIntro({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return <section className="page-width pb-3 pt-7 sm:pt-10">
    <nav aria-label="Fil d’Ariane" className="mb-7 flex items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:underline">Accueil</Link><ChevronRight size={13} /><span aria-current="page">{title}</span></nav>
    <div className="grid items-center gap-7 md:grid-cols-[1.1fr_1fr] md:gap-14">
      <div className="py-3 sm:py-7"><p className="eyebrow">{eyebrow}</p><h1 className="section-title mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1><div className="body-copy mt-5 max-w-lg">{children}</div></div>
      <div className="h-40 overflow-hidden rounded-[1.5rem] sm:h-52 md:h-64 lg:h-72"><PlaceImage terrace /></div>
    </div>
  </section>;
}
