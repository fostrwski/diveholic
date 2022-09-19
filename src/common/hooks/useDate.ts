import { useEffect, useState } from "react";

export default function useDate() {
  const [date, setDate] = useState<Date>(new Date());

  const [day, setDay] = useState<number>(date.getDate());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [fullYear, setFullYear] = useState<number>(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    const date = new Date();
    date.setDate(day);
    date.setMonth(month);
    date.setFullYear(fullYear);

    setDate(date);

    setDaysInMonth(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    );
  }, [day, month, fullYear]);

  return {
    date,
    setDay,
    setMonth,
    setFullYear,
    day,
    month,
    fullYear,
    daysInMonth,
  };
}
