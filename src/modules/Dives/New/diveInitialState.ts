import { DiveFlattened } from "common/types";

const diveInitialState: DiveFlattened = {
  date: "",
  time: "",
  locationCountryName: "",
  locationCountryCode: "",
  locationCountryFlagEmoji: "",
  locationCity: "",
  locationDiveCenter: "",
  length: 0,
  type: "",
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
