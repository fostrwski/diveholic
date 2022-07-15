export type Dive = {
  id: number;
  date: Date;
  length: number;
  maxDepth: number;
  location: {
    country: string;
    city: string;
    diveCenter: string;
  };
  temperature: {
    air: number;
    water: {
      average: number;
      minimum: number;
    };
  };
  tanks: {
    count: number;
    type: string;
    capacity: number;
  };
  water: string;
  weights: number;
  gear: {
    exposureProtection: {
      type: string;
      thickness: number;
    };
  };
};
