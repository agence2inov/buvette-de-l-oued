import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { PlaceImage } from "./PlaceImage";

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(media.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => { media.removeEventListener("change", updateMotion); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);
  useEffect(() => {
    if (paused || reduced || !visible) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % 2), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, visible]);
  return <>
    <div className="absolute inset-0 -z-20" aria-label="Photographies de la buvette">
      {[false, true].map((terrace, index) => <div key={index} aria-hidden={active !== index} className={`absolute inset-0 transition-opacity [transition-duration:800ms] ease-in-out motion-reduce:transition-none ${active === index ? "opacity-100" : "opacity-0"}`}><PlaceImage terrace={terrace} /></div>)}
    </div>
    <div role="group" aria-label="Choisir une photographie" className="absolute bottom-5 left-6 z-10 flex items-center gap-1 rounded-full bg-primary/65 px-2 text-white sm:left-10 lg:left-14">
      {["La plage et le lac", "La terrasse sous les parasols"].map((label, index) => <button key={label} type="button" aria-label={label} aria-pressed={active === index} onClick={() => { setActive(index); setPaused(true); }} className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/15"><span className={`h-2 rounded-full transition-all duration-300 ${active === index ? "w-5 bg-white" : "w-2 bg-white/55"}`} /></button>)}
      {!reduced && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Reprendre le défilement des photos" : "Mettre les photos en pause"} className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/15">{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>}
    </div>
  </>;
}
