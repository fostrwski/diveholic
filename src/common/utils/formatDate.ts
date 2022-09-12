export default function formatDate(date: Date, weekday: boolean = false) {
  const options = {
    weekday: weekday ? "short" : undefined,
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  date = new Date(date);

  // @ts-ignore
  return date.toLocaleDateString(undefined, options);
}
