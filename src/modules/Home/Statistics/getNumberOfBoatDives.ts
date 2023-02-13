import type { Dive } from "common/types";

export default function getNumberOfBoatDives(dives: Array<Dive>) {
  let numberOfBoatDives = 0;

  dives.forEach((dive) => {
    if (dive.type === "Shore") return;
    numberOfBoatDives += 1;
  });

  return numberOfBoatDives;
}
