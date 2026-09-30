import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function PageIntro({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="page-width"><nav aria-label="Fil d’Ariane" className="mb-8 flex items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:underline">Accueil</Link><ChevronRight size={13} /><span aria-current="page">{title}</span></nav><p className="eyebrow">{eyebrow}</p><h1 className="section-title mt-4 sm:text-5xl">{title}</h1><div className="body-copy mt-5 max-w-2xl">{children}</div></div></section>;
}
