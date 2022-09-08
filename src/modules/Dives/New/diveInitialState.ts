import { DiveFlattened } from "common/types";

const diveInitialState: DiveFlattened = {
  date: new Date(),
  time: "",
  locationCountryName: "",
  locationCountryCode: "",
  locationCountryFlagEmoji: "",
  locationCity: "",
  locationDiveCenter: "",
  length: 0,
  diveType: "",
  depthMax: null,
  depthAverage: null,
  weightsTaken: null,
  weightsNextTimeTakeLess: false,
  weightsNextTimeTakeMore: false,
  weightsNextTimeWeightDifference: null,
  water: "",
  temperatureAir: null,
  temperatureWaterSurface: null,
  temperatureWaterBottom: null,
  gearExposureProtectionType: "",
  gearExposureProtectionThickness: null,
  gearTanksCount: 1,
  gearTanksType: "",
};

export default diveInitialState;
