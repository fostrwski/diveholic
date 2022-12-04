import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "Required field"
  }
});

const validationSchema = yup.object({
  date: yup.string().required(),
  locationCountryName: yup.string().required(),
  locationCity: yup.string().required(),
  locationDiveCenter: yup.string().required(),
  type: yup.string().required(),
  length: yup.number().min(1, "Should be at least 1").required(),
  units: yup.string().required(),
  depthAverage: yup.number().min(1, "Should be at least 1").required(),
  depthMax: yup.number().min(1, "Should be at least 1").required(),
  weightsTaken: yup.number().required(),
  weightsAmmount: yup.string().required(),
  water: yup.string().required(),
  temperatureAir: yup.number(),
  temperatureWaterSurface: yup.number(),
  temperatureWaterBottom: yup.number(),
  gearExposureProtectionType: yup.string(),
  gearExposureProtectionThickness: yup.number(),
  gearTanksCount: yup.number(),
  gearTanksType: yup.string(),
  gearBcd: yup.string(),
  gearFins: yup.string(),
  gearRegulator: yup.string()
});

export default validationSchema;
