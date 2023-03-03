import type { Dive } from "common/types";

export default function getNumberOfPoolDives(dives: Array<Dive>) {
  let numberOfPoolDives = 0;

  dives.forEach((dive) => {
    if (dive.type !== "Pool") return;
    numberOfPoolDives += 1;
  });

  return numberOfPoolDives;
}
