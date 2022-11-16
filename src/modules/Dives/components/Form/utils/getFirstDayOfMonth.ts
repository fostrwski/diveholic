export default function getFirstDayOfMonth(date: Date) {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);

  return d.getDay();
}
