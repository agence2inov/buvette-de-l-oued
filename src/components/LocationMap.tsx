const location = "Buvette de l’Oued, Av. de la Plage 27, 1028 Préverenges, Suisse";

export default function LocationMap() {
  return <div className="mt-6">
    <div className="overflow-hidden rounded-2xl bg-secondary">
      <iframe
        title="Carte Google Maps — Buvette de l’Oued, avenue de la Plage 27 à Préverenges"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&z=15&output=embed`}
        className="h-[280px] w-full border-0 sm:h-[310px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <p className="mt-2 text-xs leading-5 text-muted-foreground">Carte fournie par Google Maps. Si elle ne s’affiche pas, utilisez le lien d’itinéraire ci-dessous.</p>
  </div>;
}
