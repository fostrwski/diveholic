import type Gear from "./gear";

export type Dive = {
  id?: number;
  date: Date;
  time: string;
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
  date: Date | null;
  time: string;
  locationCountryName: string;
  locationCountryCode: string;
  locationCountryFlagEmoji: string;
  locationCity: string;
  locationDiveCenter: string;
  type: "boat" | "shore";
  length: number;
  units: "metric" | "imperial";
  depthMax: number;
  depthAverage: number;
  weightsTaken: number;
  weightsAmmount: "perfect" | "tooLittle" | "tooMuch";
  water: "fresh" | "salt";
  temperatureAir: number | null;
  temperatureWaterSurface: number | null;
  temperatureWaterBottom: number | null;
  gearExposureProtectionType: string;
  gearExposureProtectionThickness: number | null;
  gearTanksCount: number;
  gearTanksType: string;
  gearBcd: string | null;
  gearFins: string | null;
  gearRegulator: string | null;
};
