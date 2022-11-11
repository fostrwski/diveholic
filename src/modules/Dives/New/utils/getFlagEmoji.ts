export default function getFlagEmoji(countryCode: string) {
  return (
    countryCode
      .toUpperCase()
      // @ts-ignore
      .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()))
  );
}
