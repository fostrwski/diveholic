import type { DiveFlattened } from "common/types";

const defaultValues: DiveFlattened = {
  date: "",
  locationCountryName: "",
  locationCountryCode: "",
  locationCountryFlagEmoji: "",
  locationCity: "",
  locationDiveCenter: "",
  length: null,
  type: "boat",
  units: "metric",
  depthMax: null,
  depthAverage: null,
  weightsTaken: 0,
  weightsAmmount: "perfect",
  water: "fresh",
  temperatureAir: null,
  temperatureWaterSurface: null,
  temperatureWaterBottom: null,
  gearExposureProtectionType: "",
  gearExposureProtectionThickness: null,
  gearTanksCount: 1,
  gearTanksType: "",
  gearBcd: "",
  gearRegulator: "",
  gearFins: ""
};

export default defaultValues;
