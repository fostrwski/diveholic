import type { Dive } from 'common/types';

export default function getDiveLocationCountryCodes(dives: Array<Dive>) {
  type DiveLocation = {
    [key: string]: number;
  };

  const diveLocationCountryCodes: DiveLocation = {};

  dives.forEach((dive) => {
    // eslint-disable-next-line no-unused-expressions
    dive.location.country.code in diveLocationCountryCodes
      ? (diveLocationCountryCodes[dive.location.country.code] += 1)
      : (diveLocationCountryCodes[dive.location.country.code] = 1);
  });

  return diveLocationCountryCodes;
}
