import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import PageIntro from "@/components/PageIntro";
import { menu, type MenuProduct } from "@/data/menu";

export default function Menu() {
  return <><PageIntro title="La carte" eyebrow="À boire, à grignoter, à partager"><p>Un verre face au lac, une assiette entre amis. Faites votre choix, prenez votre temps.</p></PageIntro>
    <div className="page-width py-10 sm:py-16"><div className="mx-auto max-w-3xl">
      <h2 className="sr-only">La carte par catégorie</h2>
      <p className="mb-5 text-sm text-muted-foreground">Ouvrez une catégorie pour découvrir la carte.</p>
      <Accordion type="single" collapsible className="[&_[data-state=open][role=region]]:duration-200">
        {menu.map((category, index) => <AccordionItem key={category.id} value={category.id} className="border-primary/15">
          <AccordionTrigger className="gap-5 rounded-lg py-6 text-left text-lg font-medium leading-snug text-primary hover:no-underline sm:py-7 sm:text-xl [&>svg]:h-5 [&>svg]:w-5"><span className="flex items-baseline gap-4 sm:gap-6"><span aria-hidden="true" className="font-mono text-[11px] font-normal text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><span>{category.name}</span></span></AccordionTrigger>
          <AccordionContent className="pb-7 sm:pl-10"><ul className="space-y-1">{category.products.map((product, i) => <Product key={`${product.name}-${i}`} product={product} />)}</ul></AccordionContent>
        </AccordionItem>)}
      </Accordion>
      <div className="mt-9 space-y-2 text-xs leading-6 text-muted-foreground"><p>Prix indiqués en francs suisses (CHF), TVA et service inclus.</p><p>Informations sur les allergènes : [À confirmer]</p></div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-5"><p className="flex items-center gap-3 text-sm text-primary"><Waves size={23} /> Et le lac pour horizon.</p><Link to="/horaires" className="text-link">Voir les horaires <ArrowRight size={16} /></Link></div>
    </div></div></>;
}

function Product({ product }: { product: MenuProduct }) {
  const hasVolume = product.options.some(option => option.volume);
  return <li className="py-3">
    <div className={`grid gap-x-4 gap-y-2 ${hasVolume ? "sm:grid-cols-[minmax(0,1fr)_auto]" : "grid-cols-[minmax(0,1fr)_auto]"}`}>
      <div className="min-w-0 text-sm leading-6 sm:text-base">{product.name}{product.note && <p className="text-xs text-muted-foreground">{product.note}</p>}</div>
      <div className="space-y-2">{product.options.map((option, i) => <div key={i} className="flex items-baseline justify-end gap-3 sm:gap-6"><span className="max-w-[140px] text-right text-xs leading-5 text-muted-foreground sm:max-w-none">{option.volume}</span><span className="min-w-[82px] whitespace-nowrap text-right text-sm font-semibold tabular-nums text-primary"><span className="mr-1 text-[10px] font-normal">CHF</span>{option.price}</span></div>)}</div>
    </div>
  </li>;
}
