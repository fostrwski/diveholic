export default function getDayRadioAriaLabel(day: string, month: string) {
  let dayTrimmed = day;

  // eslint-disable-next-line prefer-destructuring
  if (dayTrimmed[0] === "0") dayTrimmed = dayTrimmed[1];

  let prefix = "th";

  if (dayTrimmed === "1") prefix = "st";
  if (dayTrimmed === "2") prefix = "nd";
  if (dayTrimmed === "3") prefix = "rd";

  return `${month} ${dayTrimmed}${prefix}`;
}
