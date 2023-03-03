import type { Dive } from "common/types";

const defaultValues: Dive = {
  date: "",
  number: null,
  location: {
    country: {
      name: "",
      code: "",
      flagEmoji: ""
    },
    city: "",
    diveSpot: ""
  },
  type: "Boat",
  length: null,
  units: "metric",
  depth: {
    max: null,
    average: null
  },
  weights: {
    taken: 0,
    ammount: "perfect"
  },
  water: "Fresh",
  temperature: {
    air: null,
    water: {
      surface: null,
      bottom: null
    }
  },
  gear: {
    exposureProtection: {
      type: "",
      thickness: null
    },

    tanks: {
      count: null,
      type: ""
    },

    bcd: "",
    regulator: "",
    fins: ""
  },
  diveBuddy: "",
  notes: ""
};

export default defaultValues;
