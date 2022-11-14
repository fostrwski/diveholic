import type { DiveFlattened } from "common/types";

const newDiveInitialState: DiveFlattened = {
  date: null,
  time: "",
  locationCountryName: "",
  locationCountryCode: "",
  locationCountryFlagEmoji: "",
  locationCity: "",
  locationDiveCenter: "",
  length: 0,
  type: "boat",
  units: "metric",
  depthMax: 0,
  depthAverage: 0,
  weightsTaken: 0,
  weightsAmmount: "perfect",
  water: "fresh",
  temperatureAir: null,
  temperatureWaterSurface: null,
  temperatureWaterBottom: null,
  gearExposureProtectionType: "",
  gearExposureProtectionThickness: 0,
  gearTanksCount: 1,
  gearTanksType: "",
  gearBcd: "",
  gearRegulator: "",
  gearFins: "",
};

export default newDiveInitialState;
