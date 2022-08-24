export default function formatDateString(date: string) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dateF = new Date(date);

  // @ts-ignore
  return dateF.toLocaleDateString(undefined, options);
}
