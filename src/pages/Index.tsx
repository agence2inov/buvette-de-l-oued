import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Sun, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceImage } from "@/components/PlaceImage";
import { mapUrl } from "@/components/SiteLayout";

export default function Index() {
  return <>
    <section className="relative isolate min-h-[650px] overflow-hidden bg-primary lg:min-h-[690px]">
      <div className="absolute inset-0 -z-20"><PlaceImage /></div>
      <div className="absolute inset-0 -z-10 bg-[#102f46]/20" />
      <div className="page-width flex min-h-[650px] flex-col justify-center py-20 lg:min-h-[690px]">
        <div className="max-w-[740px] text-white motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
          <p className="eyebrow mb-7 flex items-center gap-3 text-white"><span className="h-px w-8 bg-white/80" /> La plage de Préverenges</p>
          <h1 className="hero-title">Buvette de l’Oued,<br />au bord du lac<br />à Préverenges<span className="text-[#acd3ef]">.</span></h1>
          <p className="mt-7 max-w-[490px] text-lg leading-relaxed text-white">Une assiette chaude ou froide, une glace ou un verre, les pieds presque dans l’eau face aux Alpes.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-7 font-semibold text-primary hover:bg-blue-50"><Link to="/la-carte">Voir la carte <ArrowUpRight className="ml-3 h-4 w-4" /></Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/70 bg-primary/35 px-7 text-white hover:bg-white hover:text-primary"><Link to="/horaires">Consulter les horaires</Link></Button>
          </div>
        </div>
        <div className="mt-14 flex items-center gap-2 text-sm text-white/90"><MapPin size={16} /><span>Av. de la Plage 27 · Préverenges</span></div>
      </div>
      <div className="absolute bottom-9 right-10 hidden items-center gap-3 text-white/85 lg:flex"><Waves size={30} /><span className="font-mono text-xs leading-5">Le lac pour horizon.<br />La plage à vos pieds.</span></div>
    </section>
    <section aria-label="Informations pratiques" className="border-b border-border bg-secondary/60">
      <div className="page-width grid gap-7 py-8 md:grid-cols-3 md:gap-10">
        <Practical icon={<MapPin />} title="Rendez-vous à la plage" text="Av. de la Plage 27, Préverenges" to="/contact-acces" />
        <Practical icon={<Sun />} title="Au rythme des saisons" text="Ouverture selon la période et la météo" to="/horaires" />
        <Practical icon={<Clock3 />} title="Avant de venir" text="Consultez les horaires détaillés" to="/horaires" />
      </div>
    </section>
    <section className="page-width grid items-center gap-12 py-20 md:grid-cols-2 lg:gap-20 lg:py-28">
      <div className="relative"><div className="aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-secondary"><PlaceImage terrace /></div><div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-primary shadow-sm"><Waves size={26} /><span className="font-mono text-xs">Les pieds presque dans l’eau</span></div></div>
      <div className="pt-5 md:pt-0"><p className="eyebrow">Bienvenue à l’Oued</p><h2 className="section-title mt-5">Le lac en face.<br />Le temps de profiter.</h2><p className="body-copy mt-6">À Préverenges, la terrasse de la Buvette de l’Oued fait face à la plage et aux Alpes. Les parasols, les chaises rouges, les arbres et le lac : le décor est là.</p><p className="body-copy mt-4">Une assiette chaude ou froide, une glace ou simplement un verre. À chacun sa pause au bord de l’eau.</p><Link to="/la-carte" className="text-link mt-7">Découvrir la carte <ArrowRight size={18} /></Link></div>
    </section>
    <section className="bg-secondary/65"><div className="page-width grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] lg:py-20"><div><p className="eyebrow">On se retrouve au bord du lac ?</p><h2 className="section-title mt-5">Direction Préverenges.</h2><p className="body-copy mt-5">Av. de la Plage 27, 1028 Préverenges</p><a href={mapUrl} target="_blank" rel="noreferrer" className="text-link mt-6">Préparer mon itinéraire <ArrowUpRight size={18} /><span className="sr-only"> (nouvel onglet)</span></a></div><div className="border-t border-primary/20 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0"><h3 className="text-xl font-semibold">La vie de la buvette</h3><p className="body-copy mt-4">Les soirées à thème et événements sont annoncés sur nos réseaux sociaux.</p><p className="mt-3 text-sm text-muted-foreground">Liens Instagram et Facebook : [À confirmer]</p><Link to="/contact-acces" className="text-link mt-6">Contact & accès <ArrowRight size={18} /></Link></div></div></section>
  </>;
}

function Practical({ icon, title, text, to }: { icon: React.ReactNode; title: string; text: string; to: string }) {
  return <Link to={to} className="group flex items-start gap-4 rounded-lg"><span className="mt-1 text-primary">{icon}</span><span><span className="block text-sm font-semibold text-primary group-hover:underline">{title}</span><span className="mt-1 block text-sm leading-6 text-muted-foreground">{text}</span></span></Link>;
}
