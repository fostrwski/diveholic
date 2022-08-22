import { DiveFlattened } from "common/types";

const diveInitialState: DiveFlattened = {
  date: "",
  time: "",
  locationCountryName: "",
  locationCountryCode: "",
  locationCountryFlagEmoji: "",
  locationCity: "",
  locationDiveCenter: "",
  length: null,
  maxDepth: null,
  weights: null,
  water: "",
  temperatureAir: null,
  temperatureWaterAverage: null,
  temperatureWaterMinimum: null,
  gearExposureProtectionType: "",
  gearExposureProtectionThickness: null,
  gearTanksCount: 1,
  gearTanksType: "",
};

export default diveInitialState;
