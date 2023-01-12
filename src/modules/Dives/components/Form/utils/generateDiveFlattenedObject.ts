import type { Dive, DiveFlattened } from "common/types";

export default function generateDiveFlattenedObject(dive: Dive) {
  const diveFlattened: DiveFlattened = {
    date: dive.date,
    locationCountryName: dive.location.country.name,
    locationCountryCode: dive.location.country.code,
    locationCountryFlagEmoji: dive.location.country.flagEmoji,
    locationCity: dive.location.city,
    locationDiveCenter: dive.location.diveCenter,
    length: dive.length,
    type: dive.type,
    units: dive.units,
    depthMax: dive.depth.max,
    depthAverage: dive.depth.average,
    weightsTaken: dive.weights.taken,
    weightsAmmount: dive.weights.ammount,
    water: dive.water,
    temperatureAir: dive.temperature.air,
    temperatureWaterSurface: dive.temperature.water.surface,
    temperatureWaterBottom: dive.temperature.water.bottom,
    gearExposureProtectionType: dive.gear.exposureProtection.type,
    gearExposureProtectionThickness: dive.gear.exposureProtection.thickness,
    gearTanksCount: dive.gear.tanks.count,
    gearTanksType: dive.gear.tanks.type,
    gearBcd: dive.gear.bcd,
    gearRegulator: dive.gear.regulator,
    gearFins: dive.gear.fins,
    diveBuddy: dive.diveBuddy,
    notes: dive.notes
  };

  return diveFlattened;
}
