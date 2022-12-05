import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "Required field",
    notType: function notType(_ref) {
      switch (_ref.type) {
        case "number":
          if (_ref.originalValue === "") return "Required field";
          return "Should be a number";
        case "string":
          return "Should be string";
        default:
          return "Invalid type";
      }
    }
  },
  number: {
    positive: "Should be positive"
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
  gearExposureProtectionType: yup.string(),
  gearExposureProtectionThickness: yup
    .number()
    .min(0, "Should be at least 0")
    .nullable(),
  gearTanksCount: yup.number().min(1, "Should be at least 1"),
  gearTanksType: yup.string(),
  gearBcd: yup.string(),
  gearFins: yup.string(),
  gearRegulator: yup.string()
});

export default validationSchema;
