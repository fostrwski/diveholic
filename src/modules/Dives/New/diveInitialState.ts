const diveInitialState = {
  date: "",
  time: "",
  location: {
    country: "",
    city: "",
    diveCenter: "",
  },
  length: null,
  maxDepth: null,
  weights: null,
  water: "",
  temperature: {
    air: null,
    water: {
      average: null,
      minimum: null,
    },
  },
  tanks: {
    count: 1,
    type: "",
  },
  gear: {
    exposureProtection: {
      type: "",
      thickness: null,
    },
  },
};

export default diveInitialState;
