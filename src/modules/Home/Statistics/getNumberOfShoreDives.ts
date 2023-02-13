import type { Dive } from "common/types";

export default function getNumberOfShoreDives(dives: Array<Dive>) {
  let numberOfShoreDives = 0;

  dives.forEach((dive) => {
    if (dive.type === "Boat") return;
    numberOfShoreDives += 1;
  });

  return numberOfShoreDives;
}
