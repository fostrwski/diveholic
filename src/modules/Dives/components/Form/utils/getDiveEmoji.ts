export default function getDiveEmoji(diveType: "boat" | "shore") {
  switch (diveType) {
    case "boat":
      return "🛥";
    case "shore":
      return "🏝";
    default:
      return "🤿";
  }
}
