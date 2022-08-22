import listOfCountries from "common/utils/listOfCountries";

export default function getCountryCode(country: string) {
  const countryCodes = Object.keys(listOfCountries).filter(
    // @ts-ignore
    (key: string) => listOfCountries[key] === country
  );

  return countryCodes[0];
}
