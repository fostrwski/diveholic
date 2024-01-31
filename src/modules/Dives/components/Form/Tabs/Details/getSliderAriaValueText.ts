import type { Dive } from 'common/types';

export default function getSliderAriaValueText(
  value: number,
  units: Dive['units'],
) {
  if (value === 1)
    return `${value} ${units === 'metric' ? 'kilogram' : 'pound'}`;

  return `${value} ${units === 'metric' ? 'kilograms' : 'pounds'}`;
}
