type Props = { terrace?: boolean; className?: string };

// Crop the supplied references to their photograph only; never recreate the client's imagery.
export function PlaceImage({ terrace = false, className = "" }: Props) {
  return <svg role="img" aria-label={terrace ? "La terrasse de la Buvette de l’Oued sous les parasols, face au lac" : "La terrasse, les arbres et la plage de Préverenges face au lac et aux Alpes"} viewBox={terrace ? "565 0 1340 905" : "597 0 1294 909"} preserveAspectRatio="xMidYMid slice" className={`block h-full w-full overflow-hidden ${className}`}>
    <image href={terrace ? "/images/oued-terrasse-reference.png" : "/images/oued-carte-reference.png"} width={terrace ? 1905 : 1891} height={terrace ? 905 : 909} />
  </svg>;
}

export function Logo({ className = "" }: { className?: string }) {
  return <svg role="img" aria-label="Buvette de l’Oued" viewBox="45 78 170 75" className={`h-16 w-36 ${className}`}><image href="/images/oued-carte-reference.png" width="1891" height="909" /></svg>;
}
