import type Gear from "./gear";

export type Dive = {
  id?: number;
  date: string;
  time: string;
  location: {
    country: string;
    city: string;
    diveCenter: string;
  };
  length: number | null;
  maxDepth: number | null;
  weights: number | null;
  water: string;
  temperature: {
    air: number | null;
    water: {
      average: number | null;
      minimum: number | null;
    };
  };
  tanks: {
    count: number;
    type: string;
  };
  gear: Gear;
};
