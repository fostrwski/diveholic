import { useEffect, useState } from "react";

export default function useDate(initialDate?: Date) {
  const [date, setDate] = useState<Date>(initialDate || new Date());

  const [day, setDay] = useState<number>(date.getDate());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [fullYear, setFullYear] = useState<number>(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);

  const [time, setTime] = useState<string>(
    `${date.getHours()}:${date.getMinutes()}`
  );

  useEffect(() => {
    // TODO: Sometimes works in a wrong way!
    const date = new Date();
    date.setDate(day);
    date.setMonth(month);
    date.setFullYear(fullYear);
    date.setHours(parseInt(time.split(":")[0], 10));
    date.setMinutes(parseInt(time.split(":")[1], 10));

    setDate(date);

    setDaysInMonth(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    );
  }, [day, month, fullYear, time]);

  return {
    date,
    setDay,
    setMonth,
    setFullYear,
    day,
    month,
    fullYear,
    daysInMonth,
    time,
    setTime
  };
}
