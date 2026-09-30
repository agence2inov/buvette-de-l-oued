import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./PlaceImage";

const links = [["/", "Accueil"], ["/la-carte", "La carte"], ["/horaires", "Les horaires"], ["/contact-acces", "Contact & accès"]];
const metadata: Record<string, [string, string]> = {
  "/": ["Buvette de l’Oued à Préverenges — Au bord du lac", "Une assiette chaude ou froide, une glace ou un verre face aux Alpes. Découvrez la Buvette de l’Oued à Préverenges, sa carte, ses horaires et son accès."],
  "/la-carte": ["La carte — Buvette de l’Oued, Préverenges", "Consultez les boissons, jus et bières pression de la Buvette de l’Oued à Préverenges. Retrouvez les contenances et les tarifs issus de la carte disponible."],
  "/horaires": ["Les horaires — Buvette de l’Oued, Préverenges", "Retrouvez les horaires par période et les conditions d’ouverture de la Buvette de l’Oued, au bord de la plage de Préverenges."],
  "/contact-acces": ["Contact & accès — Buvette de l’Oued, Préverenges", "Retrouvez la Buvette de l’Oued à l’avenue de la Plage 27, 1028 Préverenges. Adresse, itinéraire et informations de contact."],
};
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Buvette de l’Oued, Avenue de la Plage 27, 1028 Préverenges");

export default function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const meta = metadata[pathname] ?? ["Page introuvable — Buvette de l’Oued", "Retrouvez la carte, les horaires et l’accès à la Buvette de l’Oued à Préverenges."];
    document.title = meta[0];
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta[1]);
  }, [pathname]);
  return <div className="min-h-screen">
    <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4">Aller au contenu</a>
    <header className="relative z-30 border-b border-border bg-white">
      <div className="page-width flex h-24 items-center justify-between gap-5">
        <Link to="/" aria-label="Buvette de l’Oued — Accueil"><Logo /></Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} end className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}>{label}</NavLink>)}
        </nav>
        <a href={mapUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary lg:flex">Nous trouver <ArrowUpRight size={16} /><span className="sr-only"> (nouvel onglet)</span></a>
        <Button variant="ghost" className="h-11 w-11 rounded-full text-primary md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Navigation mobile" className="border-t px-6 pb-5 md:hidden">{links.map(([to, label]) => <NavLink key={to} to={to} end className={({ isActive }) => `block rounded-lg px-3 py-3 ${isActive ? "bg-secondary font-bold text-primary" : ""}`}>{label}</NavLink>)}</nav>}
    </header>
    <main id="contenu"><Outlet /></main>
    <footer className="bg-primary text-white">
      <div className="page-width grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div><div className="inline-block rounded-xl bg-white p-2"><Logo /></div><p className="mt-5 max-w-xs text-sm leading-7 text-white/85">Une pause au bord du lac.<br />Tout simplement.</p></div>
        <div><p className="eyebrow mb-5 text-white/70">À découvrir</p><nav aria-label="Navigation de pied de page" className="flex flex-col items-start gap-3">{links.map(([to, label]) => <Link key={to} to={to} className="text-sm hover:underline">{label}</Link>)}</nav></div>
        <div><p className="eyebrow mb-5 text-white/70">Au bord de l’eau</p><p className="text-sm leading-7">Av. de la Plage 27<br />1028 Préverenges</p><a href={mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4"><MapPin size={16} /> Voir l’itinéraire<span className="sr-only"> (nouvel onglet)</span></a></div>
      </div>
      <div className="page-width flex flex-wrap items-center justify-between gap-4 border-t border-white/20 py-5 text-xs text-white/75"><span>Buvette de l’Oued · Préverenges</span><span className="flex items-center gap-2"><Waves size={17} /> Le lac, la plage, l’Oued.</span></div>
    </footer>
  </div>;
}
