import type { Dive } from 'common/types';

import type { FiltersState } from './index';

export default function filterDives(dives: Array<Dive>, filters: FiltersState) {
  if (filters.countryCodes.length === 0) return dives;

  const { countryCodes } = filters;

  const filteredDives = dives.filter((dive) =>
    countryCodes.includes(dive.location.country.code),
  );

  return filteredDives;
}
