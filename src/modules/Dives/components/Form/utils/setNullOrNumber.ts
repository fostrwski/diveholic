export default function setNullOrNumber(value: unknown) {
  if (typeof value === "string" && value.length === 0) return null;

  if (typeof value === "string") return parseInt(value, 10);

  return value;
}
