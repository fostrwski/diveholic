import type { Dive } from 'common/types';

export default function getTotalDivesLength(dives: Array<Dive>) {
  let totalDivesLength = 0;

  dives.forEach((dive) => {
    totalDivesLength += dive.length || 0;
  });

  return totalDivesLength;
}
