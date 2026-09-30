export const openingPeriods = [
  { id: "janvier", label: "Janvier", hours: "Fermé", rhythm: "", weather: "", start: 101, end: 131 },
  { id: "opening", label: "Opening Season", hours: "16h00 → 20h00", rhythm: "14 février", weather: "", start: 214, end: 214 },
  { id: "printemps", label: "15 février → 3 avril", hours: "12h00 → coucher du soleil", rhythm: "7j/7", weather: "Beau temps & hors gel", start: 215, end: 403 },
  { id: "avril", label: "4 avril → 13 mai", hours: "11h00 → coucher du soleil", rhythm: "7j/7", weather: "Beau temps", start: 404, end: 513 },
  { id: "ete", label: "14 mai → 21 septembre", hours: "11h00 → 23h00", rhythm: "7j/7", weather: "Beau temps", start: 514, end: 921 },
  { id: "automne", label: "22 septembre → 1er novembre", hours: "11h00 → coucher du soleil", rhythm: "7j/7", weather: "Beau temps", start: 922, end: 1101 },
  // November 1 belongs to the preceding, more specific period.
  { id: "hiver", label: "Novembre & décembre", hours: "14h00 → coucher du soleil", rhythm: "Le dimanche", weather: "Beau temps & hors gel", start: 1102, end: 1231 },
];

export function getCurrentPeriodId(date = new Date()) {
  const parts = new Intl.DateTimeFormat("fr-CH", { timeZone: "Europe/Zurich", month: "numeric", day: "numeric" }).formatToParts(date);
  const month = Number(parts.find(part => part.type === "month")?.value);
  const day = Number(parts.find(part => part.type === "day")?.value);
  const calendarDay = month * 100 + day;
  return openingPeriods.find(period => calendarDay >= period.start && calendarDay <= period.end)?.id;
}
