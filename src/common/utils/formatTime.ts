export default function formatTime(time: string) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const [h, m, s] = time.split(":").map(Number);

  time = new Date(0, 0, 0, h, m, s).toLocaleTimeString(undefined, options);

  return time;
}
