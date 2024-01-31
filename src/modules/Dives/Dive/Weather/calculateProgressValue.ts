export default function calculateProgressValue(
  temperature: number,
  minValue: number,
  maxValue: number,
) {
  if (temperature === 0) return 0 + Math.abs(minValue);

  if (temperature > 0)
    return (
      ((Math.abs(minValue) + temperature) / (Math.abs(minValue) + maxValue)) *
      100
    );

  if (temperature < 0) return 0 + Math.abs(minValue) + temperature;
}
