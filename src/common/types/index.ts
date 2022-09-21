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
  type: string;
  length: number | null;
  depth: {
    max: number | null;
    average: number | null;
  };
  weights: {
    taken: number | null;
    nextTime: {
      takeLess: boolean | null;
      takeMore: boolean | null;
      weightDifference: number | null;
    };
  };
  water: string;
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
  type: string;
  length: number | null;
  depthMax: number | null;
  depthAverage: number | null;
  weightsTaken: number | null;
  weightsNextTimeTakeLess: boolean | null;
  weightsNextTimeTakeMore: boolean | null;
  weightsNextTimeWeightDifference: number | null;
  water: string;
  temperatureAir: number | null;
  temperatureWaterSurface: number | null;
  temperatureWaterBottom: number | null;
  gearExposureProtectionType: string;
  gearExposureProtectionThickness: number | null;
  gearTanksCount: number;
  gearTanksType: string;
};
