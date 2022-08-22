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
  gear: Gear;
};

// Copy of the Dive type for easier use in react state
export type DiveFlattened = {
  id?: number;
  date: string;
  time: string;
  locationCountry: string;
  locationCity: string;
  locationDiveCenter: string;
  length: number | null;
  maxDepth: number | null;
  weights: number | null;
  water: string;
  temperatureAir: number | null;
  temperatureWaterAverage: number | null;
  temperatureWaterMinimum: number | null;
  gearExposureProtectionType: string;
  gearExposureProtectionThickness: number | null;
  gearTanksCount: number;
  gearTanksType: string;
};
