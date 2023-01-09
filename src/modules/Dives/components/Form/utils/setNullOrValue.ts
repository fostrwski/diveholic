export default function setNullOrValue(value: unknown) {
  if (typeof value === "string" && value.length === 0) return null;
  return value;
}
