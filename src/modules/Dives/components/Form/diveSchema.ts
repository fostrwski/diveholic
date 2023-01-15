import type { Dive } from "common/types";
import { number, object, setLocale, string } from "yup";

import listOfCountries from "./utils/listOfCountries";

setLocale({
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

const diveSchema = object({
  id: number().optional(),
  date: string().required(),
  location: object({
    country: object({
      name: string().required(),
      // @ts-ignore
      code: string<keyof typeof listOfCountries>().required(),
      flagEmoji: string().required()
    }),
    city: string().required(),
    diveCenter: string().required()
  }),
  // @ts-ignore
  type: string<"shore" | "boat">().defined().required(),
  length: number().min(1, "Should be at least 1").nullable().required(),
  // @ts-ignore
  units: string<"metric" | "imperial">().defined().required(),
  depth: object({
    average: number().min(1, "Should be at least 1").nullable(true),
    max: number().min(1, "Should be at least 1").nullable(true)
  }),
  weights: object({
    taken: number().required(),
    // @ts-ignore
    ammount: string<"perfect" | "tooLittle" | "tooMuch">().defined().required()
  }),
  // @ts-ignore
  water: string<"fresh" | "salt">().defined().required(),
  temperature: object({
    air: number().nullable(),
    water: object({
      surface: number().nullable(),
      bottom: number().nullable()
    })
  }),
  gear: object({
    exposureProtection: object({
      gearExposureProtectionType: string().nullable(),
      thickness: number().min(0, "Should be at least 0").nullable()
    }),
    tanks: object({
      count: number().min(1, "Should be at least 1").nullable().optional(),
      type: string()
    }),
    bcd: string(),
    fins: string(),
    regulator: string()
  }),
  diveBuddy: string(),
  notes: string()
});

export default diveSchema;
