import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Hours from "./pages/Hours";
import Contact from "./pages/Contact";

const App = () => <BrowserRouter><Routes><Route element={<SiteLayout />}><Route path="/" element={<Index />} /><Route path="/la-carte" element={<Menu />} /><Route path="/horaires" element={<Hours />} /><Route path="/contact-acces" element={<Contact />} /><Route path="*" element={<div className="page-width py-24"><p className="eyebrow">Erreur 404</p><h1 className="section-title mt-5">Cette page est introuvable.</h1><Link to="/" className="text-link mt-8">Revenir à l’accueil</Link></div>} /></Route></Routes></BrowserRouter>;
export default App;
