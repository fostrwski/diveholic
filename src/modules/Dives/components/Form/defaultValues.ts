import type { Dive } from "common/types";

const defaultValues: Dive = {
  date: "",
  location: {
    country: {
      name: "",
      code: "",
      flagEmoji: ""
    },
    city: "",
    diveCenter: ""
  },
  type: "boat",
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
  water: "fresh",
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
