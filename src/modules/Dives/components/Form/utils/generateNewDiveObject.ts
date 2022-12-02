import type { Dive } from "common/types";

import type { FormFields } from "../types";

export default function generateNewDiveObject(dive: FormFields): Dive {
  const newDive: Dive = {
    date: dive.date!,
    location: {
      country: {
        name: dive.locationCountryName,
        code: dive.locationCountryCode,
        flagEmoji: dive.locationCountryFlagEmoji,
      },
      city: dive.locationCity,
      diveCenter: dive.locationDiveCenter,
    },
    type: dive.type,
    length: dive.length,
    units: dive.units,
    depth: {
      average: dive.depthAverage,
      max: dive.depthMax,
    },
    weights: {
      taken: dive.weightsTaken,
      ammount: dive.weightsAmmount,
    },
    water: dive.water,
    temperature: {
      air: dive.temperatureAir,
      water: {
        surface: dive.temperatureWaterSurface,
        bottom: dive.temperatureWaterBottom,
      },
    },
    gear: {
      exposureProtection: {
        type: dive.gearExposureProtectionType,
        thickness: dive.gearExposureProtectionThickness,
      },
      tanks: {
        count: dive.gearTanksCount,
        type: dive.gearTanksType,
      },
      bcd: dive.gearBcd,
      regulator: dive.gearRegulator,
      fins: dive.gearFins,
    },
  };

  return newDive;
}
