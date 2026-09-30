import { Link } from "react-router-dom";
import { ArrowRight, Waves, GlassWater, Citrus, Beer, Wine, Martini, Cherry, Coffee, Utensils, Salad, CookingPot, Sandwich, ChevronRight, type LucideIcon } from "lucide-react";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceImage } from "@/components/PlaceImage";
import { menu, type MenuProduct } from "@/data/menu";

const groups = [
  { id: "boissons", title: "Boissons", subtitle: "Un verre face au lac", categories: ["minerales", "jus", "pression", "bouteilles", "cocktails", "sans-alcool", "chaudes"] },
  { id: "restauration", title: "À manger", subtitle: "Une petite faim, un moment à partager", categories: ["toute-heure", "salades", "plats", "burgers"] },
];
const icons: Record<string, LucideIcon> = {
  minerales: GlassWater, jus: Citrus, pression: Beer, bouteilles: Wine,
  cocktails: Martini, "sans-alcool": Cherry, chaudes: Coffee,
  "toute-heure": Utensils, salades: Salad, plats: CookingPot, burgers: Sandwich,
};
const deposits = menu.find(category => category.id === "consignes")!;

export default function Menu() {
  return <>
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 -z-20"><PlaceImage /></div>
      <div className="absolute inset-0 -z-10 bg-[#102f46]/25" />
      <div className="page-width py-6 sm:py-8">
        <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-white/90"><Link to="/" className="rounded-sm underline-offset-4 hover:underline">Accueil</Link><ChevronRight size={13} aria-hidden="true" /><span aria-current="page">La carte</span></nav>
        <div className="max-w-2xl py-12 sm:py-16 lg:py-20">
          <p className="eyebrow mb-5 text-white">À boire, à grignoter, à partager</p>
          <h1 className="hero-title">La carte</h1>
          <p className="mt-5 max-w-md text-base leading-7 sm:text-lg">Un verre face au lac, une assiette entre amis.<br />Prenez le temps de choisir.</p>
        </div>
      </div>
    </section>
    <div className="page-width py-10 sm:py-14">
      <p className="mb-8 text-sm text-muted-foreground">Ouvrez une catégorie pour découvrir la carte.</p>
      <Accordion type="single" collapsible className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {groups.map(group => <section key={group.id} aria-labelledby={`heading-${group.id}`} className="min-w-0">
          <div className="mb-5"><h2 id={`heading-${group.id}`} className="section-title text-3xl lg:text-4xl">{group.title}</h2><p className="mt-2 text-sm text-muted-foreground">{group.subtitle}</p></div>
          {menu.filter(category => group.categories.includes(category.id)).map(category => {
            const Icon = icons[category.id];
            return <AccordionItem key={category.id} value={category.id} className="border-primary/15">
              <AccordionTrigger className="gap-3 rounded-lg py-5 text-left text-base font-medium leading-snug text-primary hover:no-underline hover:text-primary/80 sm:text-lg [&>svg]:h-4 [&>svg]:w-4"><span className="flex min-w-0 items-center gap-3 sm:gap-4"><Icon aria-hidden="true" strokeWidth={1.5} className="h-5 w-5 shrink-0" /><span>{category.name}</span></span></AccordionTrigger>
              <AccordionContent className="pb-6"><ul className="space-y-1">{category.products.map((product, i) => <Product key={`${category.id}-${i}`} product={product} />)}</ul></AccordionContent>
            </AccordionItem>;
          })}
        </section>)}
      </Accordion>
      <section aria-labelledby="consignes-heading" className="mt-12 rounded-2xl bg-secondary/50 px-5 py-6 sm:mt-16 sm:px-7">
        <h2 id="consignes-heading" className="font-mono text-xs font-medium uppercase tracking-widest text-primary">Consignes</h2>
        <dl className="mt-4 grid gap-x-10 gap-y-3 text-sm sm:grid-cols-2 xl:grid-cols-4">{deposits.products.map(product => <div key={product.name} className="flex items-baseline justify-between gap-3"><dt className="text-muted-foreground">{product.name}</dt><dd className="shrink-0 font-medium tabular-nums text-primary">CHF {product.options[0].price}</dd></div>)}</dl>
      </section>
      <div className="mt-4 space-y-1 text-xs leading-6 text-muted-foreground"><p>Prix indiqués en francs suisses (CHF), TVA et service inclus.</p><p>Informations sur les allergènes : [À confirmer]</p></div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-5"><p className="flex items-center gap-3 text-sm text-primary"><Waves size={23} aria-hidden="true" /> Et le lac pour horizon.</p><Link to="/horaires" className="text-link">Voir les horaires <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </div>
  </>;
}

function Product({ product }: { product: MenuProduct }) {
  const hasVolume = product.options.some(option => option.volume);
  return <li className="py-3">
    <div className={`grid gap-x-3 gap-y-2 ${hasVolume ? "sm:grid-cols-[minmax(0,1fr)_auto]" : "grid-cols-[minmax(0,1fr)_auto]"}`}>
      <div className="min-w-0 text-sm leading-6">{product.name}{product.note && <p className="text-xs text-muted-foreground">{product.note}</p>}</div>
      <div className="space-y-2">{product.options.map((option, i) => <div key={i} className="flex items-baseline justify-end gap-3"><span className="max-w-[110px] text-right text-xs leading-5 text-muted-foreground">{option.volume}</span><span className="min-w-[76px] whitespace-nowrap text-right text-sm font-semibold tabular-nums text-primary"><span className="mr-1 text-[10px] font-normal">CHF</span>{option.price}</span></div>)}</div>
    </div>
  </li>;
}
