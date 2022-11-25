const formatTime = (date: string) => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return d.toLocaleTimeString(undefined, options);
};

const formatDate = (date: string) => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return d.toLocaleDateString(undefined, options);
};

export { formatTime, formatDate };
