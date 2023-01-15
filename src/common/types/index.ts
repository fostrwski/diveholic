import type Gear from "./gear";

export type Dive = {
  id?: number;
  date: string;
  location: {
    country: {
      name: string;
      code: string;
      flagEmoji: string;
    };
    city: string;
    diveCenter: string;
  };
  type: "shore" | "boat";
  length: number | null;
  units: "metric" | "imperial";
  depth: {
    max: number | null;
    average: number | null;
  };
  weights: {
    taken: number;
    ammount: "perfect" | "tooLittle" | "tooMuch";
  };
  water: "fresh" | "salt";
  temperature: {
    air: number | null;
    water: {
      surface: number | null;
      bottom: number | null;
    };
  };
  gear: Gear;
  diveBuddy: string;
  notes: string;
};
