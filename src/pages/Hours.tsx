import { CloudSun, ArrowRight, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/PageIntro";

const periods = [
  { period: "Janvier", hours: "Une pause hivernale", rhythm: "Fermé" },
  { period: "Samedi 14 février", hours: "16h → 20h", rhythm: "Ouverture de saison" },
  { period: "15 février → 3 avril", hours: "12h → coucher du soleil", rhythm: "Tous les jours", frost: true },
  { period: "4 avril → 13 mai", hours: "11h → coucher du soleil", rhythm: "Tous les jours" },
  { period: "14 mai → 21 septembre", hours: "11h00 → 23h00", rhythm: "Tous les jours", main: true },
  { period: "22 septembre → 1er novembre", hours: "11h00 → coucher du soleil", rhythm: "Tous les jours" },
  { period: "Novembre & décembre", hours: "14h → coucher du soleil", rhythm: "Le dimanche", frost: true },
];
export default function Hours() {
  return <><PageIntro title="Les horaires" eyebrow="Le temps d’une pause au lac"><p>Des premiers beaux jours aux longues soirées d’été, retrouvez le rythme de la buvette.</p></PageIntro>
    <div className="page-width py-10 sm:py-16"><div className="mx-auto max-w-3xl">
      <h2 className="sr-only">Les périodes d’ouverture</h2>
      <p className="mb-8 flex items-start gap-3 text-sm leading-6 text-muted-foreground"><CloudSun size={21} className="mt-0.5 shrink-0 text-primary" />Ouverture par beau temps. Hors gel également pour les périodes signalées.</p>
      <ol className="ml-2 border-l border-primary/20">
        {periods.map(period => <li key={period.period} className="relative pb-9 pl-6 sm:pl-10"><span aria-hidden="true" className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ${period.main ? "bg-primary" : "bg-background ring-1 ring-primary/40"}`} />
          <div className={period.main ? "-ml-2 rounded-[1.5rem] bg-primary p-6 text-white sm:p-8" : "py-1"}>
            {period.main && <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/85"><Sun size={18} /> Les beaux jours à l’Oued</p>}
            <h3 className={`text-base font-medium sm:text-lg ${period.main ? "text-white" : "text-primary"}`}>{period.period}</h3>
            <p className={`mt-2 font-semibold tracking-tight ${period.main ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>{period.hours}</p>
            <p className={`mt-2 text-sm ${period.main ? "text-white/85" : "text-muted-foreground"}`}>{period.rhythm}{period.frost && <span className="ml-3 text-xs">· Hors gel</span>}</p>
          </div>
        </li>)}
      </ol>
      <p className="mt-1 text-xs leading-6 text-muted-foreground">Calendrier issu de « Les horaires 26 ». Année et actualité des horaires : [À confirmer].</p>
      <div className="mt-12 border-t border-primary/15 pt-8"><p className="eyebrow">Et parfois, la soirée continue…</p><h2 className="mt-3 text-2xl font-semibold text-primary">Soirées à thème & événements</h2><p className="body-copy mt-3">Les rendez-vous de la buvette sont annoncés sur nos réseaux sociaux.</p><Link to="/contact-acces" className="text-link mt-5">Suivre la buvette <ArrowRight size={16} /></Link></div>
    </div></div></>;
}
