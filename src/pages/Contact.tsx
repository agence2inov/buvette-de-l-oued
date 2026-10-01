import { ArrowUpRight, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/PageIntro";
import LocationMap from "@/components/LocationMap";
import { mapUrl } from "@/components/SiteLayout";

export default function Contact() {
  return <><PageIntro title="Contact & accès" eyebrow="On se retrouve à la plage ?"><p>Direction Préverenges, les parasols et le lac. Toutes les informations pour venir à l’Oued.</p></PageIntro>
    <div className="page-width py-12 sm:py-16"><div className="grid items-start gap-10 md:grid-cols-[1.15fr_1fr] lg:gap-20">
      <section className="min-w-0"><p className="eyebrow">Les pieds presque dans l’eau</p><h2 className="editorial-title mt-4 text-4xl text-primary">Nous trouver</h2><address className="mt-5 text-lg not-italic leading-8">Buvette de l’Oued<br />Av. de la Plage 27<br />1028 Préverenges, Suisse</address><LocationMap /><Button asChild className="mt-6 h-12 rounded-full px-6"><a href={mapUrl} target="_blank" rel="noreferrer">Voir l’itinéraire <ArrowUpRight className="ml-2 h-4 w-4" /><span className="sr-only"> (Google Maps, nouvel onglet)</span></a></Button><p className="mt-4 text-xs leading-6 text-muted-foreground">Stationnement, transports et accessibilité : [À confirmer].</p><Link to="/horaires" className="text-link mt-5">Consulter les horaires avant de venir</Link></section>
      <section className="contact-note bg-primary p-7 text-white sm:p-9 md:mt-12 lg:p-10"><p className="eyebrow text-white/85">Un mot, une question</p><h2 className="editorial-title mt-4 text-4xl text-white">Gardons le contact</h2><dl className="mt-8 space-y-6 text-sm"><div className="flex items-start gap-3"><Phone size={19} className="mt-0.5 shrink-0" /><div><dt className="font-medium">Téléphone</dt><dd className="mt-1 text-white/85">[À confirmer]</dd></div></div><div className="flex items-start gap-3"><Mail size={19} className="mt-0.5 shrink-0" /><div><dt className="font-medium">E-mail</dt><dd className="mt-1 text-white/85">[À confirmer]</dd></div></div></dl>
        <div className="mt-8 space-y-5 border-t border-white/25 pt-7 text-sm leading-6"><p className="flex items-start gap-3"><Instagram size={20} className="mt-0.5 shrink-0" /><span>Instagram<br /><span className="text-white/85">Lien officiel [À confirmer]</span></span></p><p className="flex items-start gap-3"><Facebook size={20} className="mt-0.5 shrink-0" /><span>Facebook<br /><span className="text-white/85">Lien officiel [À confirmer]</span></span></p></div>
        <p className="mt-8 text-sm leading-7"><span className="font-semibold">Réservations</span><br /><span className="text-white/85">Possibilité et modalités : [À confirmer]</span></p>
      </section>
    </div><section className="mt-14 border-t border-primary/15 pt-9"><h2 className="editorial-title text-3xl text-primary">La vie de la buvette</h2><p className="body-copy mt-3">Soirées à thème et événements : les rendez-vous sont annoncés sur nos réseaux sociaux.</p></section></div>
  </>;
}
