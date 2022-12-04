import listOfCountries from "./listOfCountries";

export default function getCountryCode(country: string) {
  const countryCodes = Object.keys(listOfCountries).filter(
    // @ts-ignore
    (key: string) => listOfCountries[key] === country
  );

  if (countryCodes.length === 0) return "";

  return countryCodes[0];
}
