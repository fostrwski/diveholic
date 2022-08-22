import { Dive } from "common/types";

const dives: Array<Dive> = [
  {
    id: 1,
    date: "July 11, 2022",
    time: "11:37",
    length: 43,
    maxDepth: 32.2,
    location: {
      country: {
        code: "HR",
        name: "Croatia",
        flagEmoji: "🇭🇷",
      },
      city: "Trogir",
      diveCenter: "Trogir Dive Center",
    },
    temperature: {
      air: 25,
      water: {
        average: 21,
        minimum: 16,
      },
    },
    water: "salt",
    weights: 6,
    gear: {
      exposureProtection: {
        type: "wetsuit",
        thickness: 7,
      },
      tanks: {
        count: 1,
        type: "aluminum",
      },
    },
  },
  {
    id: 2,
    date: "July 11, 2022",
    time: "13:42",
    length: 38,
    maxDepth: 26.7,
    location: {
      country: {
        name: "Italy",
        code: "IT",
        flagEmoji: "🇮🇹",
      },
      city: "Rome",
      diveCenter: "Rome diving center",
    },
    temperature: {
      air: 25,
      water: {
        average: 21,
        minimum: 18,
      },
    },
    water: "salt",
    weights: 6,
    gear: {
      exposureProtection: {
        type: "wetsuit",
        thickness: 7,
      },
      tanks: {
        count: 1,
        type: "aluminum",
      },
    },
  },
];

export default dives;
