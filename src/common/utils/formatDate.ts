export default function formatDate(date: Date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  date = new Date(date);

  // @ts-ignore
  return date.toLocaleDateString(undefined, options);
}
