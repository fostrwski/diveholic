import weekdays from "./weekdays";

export default function generateWeekDaysArrayStartingWithDay(day: string) {
  const weekArray = [
    ...weekdays.slice(weekdays.indexOf(day)),
    ...weekdays.slice(0, weekdays.indexOf(day)),
  ];
  return weekArray;
}
