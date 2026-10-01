import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, CloudSun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlaceImage } from "@/components/PlaceImage";
import { getCurrentPeriodId, openingPeriods } from "@/data/openingPeriods";

export default function Hours() {
  const [currentId, setCurrentId] = useState(() => getCurrentPeriodId());
  const timeline = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const timer = window.setInterval(() => setCurrentId(getCurrentPeriodId()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const list = timeline.current;
    const current = list?.querySelector<HTMLElement>('[aria-current="date"]');
    if (list && current) {
      // Move only the horizontal strip, never the page's vertical scroll position.
      list.scrollLeft = current.offsetLeft - list.offsetLeft - (list.clientWidth - current.clientWidth) / 2;
    }
  }, [currentId]);
  const move = (direction: number) => {
    const list = timeline.current;
    if (list) list.scrollBy({ left: direction * list.clientWidth * 0.75, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  return <>
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 -z-20"><PlaceImage terrace /></div>
      <div className="absolute inset-0 -z-10 bg-[#102f46]/10" />
      <div className="photo-copy page-width py-6 sm:py-8">
        <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-white/90"><Link to="/" className="rounded-sm underline-offset-4 hover:underline">Accueil</Link><ChevronRight size={13} aria-hidden="true" /><span aria-current="page">Les horaires</span></nav>
        <div className="max-w-2xl py-14 sm:py-20"><p className="eyebrow mb-5 text-white">Au rythme du lac et des saisons</p><h1 className="hero-title italic">Les horaires</h1><p className="mt-5 max-w-lg text-base leading-7 sm:text-lg">Nos horaires évoluent au fil des saisons et selon les conditions météo.</p></div>
      </div>
    </section>
    <section aria-labelledby="calendar-heading" className="page-width py-10 sm:py-12">
      <div className="flex items-end justify-between gap-4"><div><p className="eyebrow mb-3">Votre prochain moment à l’Oued</p><h2 id="calendar-heading" className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">L’année en un regard</h2></div><div className="flex shrink-0 gap-2"><Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Voir les périodes précédentes" aria-controls="season-timeline" className="h-10 w-10 rounded-full border-primary/20 text-primary"><ChevronLeft size={18} /></Button><Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Voir les périodes suivantes" aria-controls="season-timeline" className="h-10 w-10 rounded-full border-primary/20 text-primary"><ChevronRight size={18} /></Button></div></div>
      <p id="timeline-help" className="mt-3 text-xs leading-6 text-muted-foreground">Faites glisser la frise ou utilisez les flèches pour parcourir les saisons.</p>
      <ol ref={timeline} id="season-timeline" tabIndex={0} aria-label="Périodes d’ouverture de la buvette" aria-describedby="timeline-help" className="relative mt-6 flex snap-x snap-proximity overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:hsl(var(--primary)/0.3)_transparent] [scrollbar-width:thin]">
        {openingPeriods.map(period => {
          const current = period.id === currentId;
          return <li key={period.id} aria-current={current ? "date" : undefined} className="relative w-[230px] shrink-0 snap-center pt-6 sm:w-[245px]">
            <svg aria-hidden="true" viewBox="0 0 240 18" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-5 w-full text-primary/30"><path d="M0 9 Q60 -3 120 9 T240 9" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg><span aria-hidden="true" className={`absolute left-5 top-0 h-[11px] w-[11px] rounded-full border-2 ${current ? "border-primary bg-primary" : "border-primary/40 bg-background"}`} />
            <div className={`mr-3 min-h-[218px] p-5 ${current ? "rounded-bl-[2rem] rounded-tr-[2rem] bg-primary text-white" : "text-foreground"}`}>
              <p className={`mb-3 min-h-4 font-mono text-[10px] uppercase tracking-wider ${current ? "text-white" : "text-muted-foreground"}`}>{current ? "Période actuelle" : "\u00a0"}</p>
              <h3 className={`editorial-title min-h-12 text-xl leading-6 ${current ? "text-white" : "text-primary"}`}>{period.label}</h3>
              {period.rhythm && <p className={`mt-2 text-xs ${current ? "text-white/85" : "text-muted-foreground"}`}>{period.rhythm}</p>}
              <p className="mt-2 text-lg font-semibold leading-6 tracking-tight">{period.hours}</p>
              {period.weather && <p className={`mt-4 flex items-start gap-2 text-xs leading-5 ${current ? "text-white/90" : "text-muted-foreground"}`}><CloudSun size={16} aria-hidden="true" className="mt-0.5 shrink-0" />{period.weather}</p>}
            </div>
          </li>;
        })}
      </ol>
      <p className="mt-3 max-w-3xl text-xs leading-6 text-muted-foreground">La période actuelle est repérée selon la date en Suisse. Ce repère ne confirme pas l’ouverture réelle : les horaires indiqués restent soumis aux conditions météo.</p>
      {!currentId && <p className="mt-2 text-sm text-muted-foreground">Aucun horaire n’est précisé pour la date du jour : [À confirmer].</p>}
    </section>
    <section className="bg-secondary/45"><div className="page-width flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:gap-7"><CalendarDays aria-hidden="true" strokeWidth={1.5} className="h-9 w-9 shrink-0 text-primary" /><div className="flex-1"><h2 className="text-xl font-semibold text-primary">Soirées à thème & événements</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">Soirées à thème et événements annoncés sur nos réseaux sociaux.</p></div><Link to="/contact-acces" className="text-link shrink-0">Contact & réseaux <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
  </>;
}
