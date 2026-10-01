import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceImage } from "@/components/PlaceImage";
import HeroSlideshow from "@/components/HeroSlideshow";
import LakeCurve from "@/components/LakeCurve";
import { mapUrl } from "@/components/SiteLayout";

export default function Index() {
  return <>
    <section className="relative isolate min-h-[690px] overflow-hidden bg-primary lg:min-h-[760px]">
      <HeroSlideshow />
      <div className="absolute inset-0 -z-10 bg-[#102f46]/10" />
      <div className="page-width flex min-h-[690px] flex-col justify-center pb-24 pt-14 lg:min-h-[760px]">
        <div className="photo-copy max-w-[850px] text-white">
          <p className="eyebrow mb-7 flex items-center gap-3 text-white"><span className="h-px w-9 bg-white/80" /> La plage de Préverenges</p>
          <h1 className="hero-title">Buvette de l’Oued,<br /><em className="font-normal">au bord du lac</em><br />à Préverenges<span className="sun-accent">.</span></h1>
          <p className="mt-7 max-w-[470px] text-lg leading-relaxed text-white">Une assiette chaude ou froide, une glace ou un verre, les pieds presque dans l’eau face aux Alpes.</p>
          <div className="mt-8 flex flex-wrap gap-3 [text-shadow:none]">
            <Button asChild className="h-12 rounded-full bg-background px-7 font-semibold text-primary hover:bg-accent"><Link to="/la-carte">Voir la carte <ArrowUpRight className="ml-3 h-4 w-4" /></Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/80 bg-primary/50 px-7 text-white hover:bg-background hover:text-primary"><Link to="/horaires">Consulter les horaires</Link></Button>
          </div>
        </div>
        <div className="photo-copy mt-10 flex items-center gap-2 text-sm text-white"><MapPin size={16} /><span>Av. de la Plage 27 · Préverenges</span></div>
      </div>
      <div className="absolute bottom-10 right-12 hidden -rotate-3 text-white lg:block"><LakeCurve className="mb-2 text-white" /><span className="editorial-title text-2xl italic">Le lac pour horizon.<br />La plage à vos pieds.</span></div>
    </section>
    <section aria-label="Informations pratiques" className="sand-surface">
      <div className="page-width flex flex-col justify-between gap-5 py-7 md:flex-row md:gap-8">
        <Practical title="Rendez-vous à la plage" text="Av. de la Plage 27, Préverenges" to="/contact-acces" />
        <Practical title="Au rythme des saisons" text="Ouverture selon la période et la météo" to="/horaires" />
        <Practical title="Avant de venir" text="Consultez les horaires détaillés" to="/horaires" />
      </div>
    </section>
    <section className="mx-auto grid max-w-[1600px] items-center gap-9 py-14 md:grid-cols-[1.3fr_1fr] md:gap-12 lg:gap-20 lg:py-20">
      <figure className="min-w-0 pl-4 md:pl-0"><div className="aspect-[6/5] overflow-hidden rounded-r-[3rem] sm:aspect-[5/4] md:aspect-[1/1] lg:aspect-[6/5]"><PlaceImage terrace /></div><figcaption className="photo-caption mt-4 flex items-center justify-end gap-4 pr-6"><LakeCurve className="h-4 w-20" />Les pieds presque dans l’eau</figcaption></figure>
      <div className="px-6 sm:px-10 md:pl-0 lg:pr-16"><p className="eyebrow">Bienvenue à l’Oued</p><h2 className="section-title mt-5">Le lac en face.<br /><em className="font-normal">Le temps de profiter.</em></h2><p className="body-copy mt-6 max-w-md">À Préverenges, la terrasse de la Buvette de l’Oued fait face à la plage et aux Alpes. Les parasols, les chaises rouges, les arbres et le lac : le décor est là.</p><p className="body-copy mt-4 max-w-md">Une assiette chaude ou froide, une glace ou simplement un verre. À chacun sa pause au bord de l’eau.</p><Link to="/la-carte" className="text-link mt-7">Découvrir la carte <ArrowRight size={18} /></Link></div>
    </section>
    <section className="sand-surface overflow-hidden"><div className="mx-auto grid max-w-[1600px] md:grid-cols-[1fr_1.1fr]">
      <div className="px-6 py-12 sm:px-10 lg:px-20 lg:py-16"><p className="eyebrow">On se retrouve au bord du lac ?</p><h2 className="section-title mt-5">Direction<br /><em className="font-normal">Préverenges.</em></h2><p className="body-copy mt-5">Av. de la Plage 27, 1028 Préverenges</p><a href={mapUrl} target="_blank" rel="noreferrer" className="text-link mt-5">Préparer mon itinéraire <ArrowUpRight size={18} /><span className="sr-only"> (nouvel onglet)</span></a><LakeCurve className="my-8 text-primary/60" /><h3 className="editorial-title text-3xl text-primary">La vie de la buvette</h3><p className="body-copy mt-3">Les soirées à thème et événements sont annoncés sur nos réseaux sociaux.</p><p className="mt-3 text-sm text-muted-foreground">Liens Instagram et Facebook : [À confirmer]</p><Link to="/contact-acces" className="text-link mt-5">Contact & accès <ArrowRight size={18} /></Link></div>
      <div className="min-h-[350px] overflow-hidden rounded-tl-[4rem] md:min-h-full md:rounded-tl-[7rem]"><PlaceImage /></div>
    </div></section>
  </>;
}

function Practical({ title, text, to }: { title: string; text: string; to: string }) {
  return <Link to={to} className="group rounded-sm"><span className="editorial-title block text-xl text-primary group-hover:underline">{title}</span><span className="mt-1 block text-xs leading-6 text-muted-foreground sm:text-sm">{text}</span></Link>;
}
