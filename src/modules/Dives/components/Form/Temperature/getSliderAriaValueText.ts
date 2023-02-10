import type { Dive } from "common/types";

export default function getSliderAriaValueText(
  value: number | undefined,
  units: Dive["units"]
) {
  if (!value) return "Value not set";
  return `${value}°${units === "metric" ? "C" : "F"}`;
}
