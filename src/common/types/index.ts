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
  length: number;
  units: "metric" | "imperial";
  depth: {
    max: number;
    average: number;
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
};

// Copy of the Dive type for easier use in react state
export type DiveFlattened = {
  id?: number;
  date: string;
  locationCountryName: string;
  locationCountryCode: string;
  locationCountryFlagEmoji: string;
  locationCity: string;
  locationDiveCenter: string;
  type: "boat" | "shore";
  length: number | null;
  units: "metric" | "imperial";
  depthMax: number | null;
  depthAverage: number | null;
  weightsTaken: number;
  weightsAmmount: "perfect" | "tooLittle" | "tooMuch";
  water: "fresh" | "salt";
  temperatureAir: number | null;
  temperatureWaterSurface: number | null;
  temperatureWaterBottom: number | null;
  gearExposureProtectionType: string;
  gearExposureProtectionThickness: number | null;
  gearTanksCount: number | null;
  gearTanksType: string;
  gearBcd: string;
  gearFins: string;
  gearRegulator: string;
  diveBuddy: string;
  notes: string;
};
