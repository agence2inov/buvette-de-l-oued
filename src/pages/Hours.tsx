import { CloudSun, Snowflake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";
const periods = [
  ["Janvier", "Fermé", ""],
  ["Ouverture de saison", "Samedi 14 février · 16h–20h", ""],
  ["15 février au 3 avril", "Tous les jours · 12h au coucher du soleil", "Par beau temps et hors gel"],
  ["4 avril au 13 mai", "Tous les jours · 11h au coucher du soleil", "Par beau temps"],
  ["14 mai (Ascension) au 21 septembre", "Tous les jours · 11h00–23h00", "Par beau temps · Mention « Jeûne fédéral » dans la référence"],
  ["22 septembre au 1er novembre", "Tous les jours · 11h00 au coucher du soleil", "Par beau temps"],
  ["Novembre et décembre", "Dimanche · 14h au coucher du soleil", "Par beau temps et hors gel"],
];
export default function Hours() {
  return <><PageIntro title="Les horaires" eyebrow="Au rythme des saisons"><p>Le temps d’un verre ou d’une assiette au bord du lac à Préverenges. Retrouvez les périodes d’ouverture avant de venir.</p></PageIntro>
    <div className="page-width grid gap-10 py-12 lg:grid-cols-[1fr_300px] lg:gap-14 lg:py-16"><div><p className="notice mb-8">Calendrier repris de l’écran « Les horaires 26 ». Année, dates et actualité des horaires : <strong>[À confirmer]</strong>.</p><h2 className="mb-6 text-2xl font-semibold text-primary">Le calendrier d’ouverture</h2><div className="overflow-hidden rounded-2xl border border-border">{periods.map(([period, hours, condition], i) => <section key={period} className={`grid gap-3 p-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6 sm:p-6 ${i ? "border-t" : ""} ${i % 2 ? "bg-secondary/35" : "bg-white"}`}><h3 className="text-sm font-semibold leading-6 text-primary">{period}</h3><div><p className="text-sm font-medium leading-6">{hours}</p>{condition && <p className="mt-2 text-xs leading-6 text-muted-foreground">{condition}</p>}</div></section>)}</div></div>
      <aside className="space-y-6"><div className="rounded-2xl bg-secondary p-7"><CloudSun size={32} className="text-primary" /><h2 className="mt-5 text-xl font-semibold text-primary">Un œil sur le ciel</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">L’ouverture est conditionnée au beau temps pour les périodes indiquées. En début et fin d’année, elle dépend également de l’absence de gel.</p><div className="mt-5 flex items-start gap-3 border-t pt-5 text-sm leading-6"><Snowflake size={20} className="mt-1 shrink-0 text-primary" /><p>Ces horaires ne constituent pas une confirmation d’ouverture en temps réel.</p></div></div><div className="px-2"><h2 className="text-xl font-semibold text-primary">Soirées & événements</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Les soirées à thème et événements sont annoncés sur les réseaux sociaux de la buvette.</p><Link to="/contact-acces" className="text-link mt-5">Contact & accès <ArrowRight size={16} /></Link></div></aside>
    </div></>;
}
