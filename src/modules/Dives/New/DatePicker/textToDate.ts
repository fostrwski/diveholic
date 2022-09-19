export default function textToDate(text: string) {
  const date = new Date();
  const today = new Date();

  const daysAgo = () => {
    switch (text.toLowerCase()) {
      case "yesterday":
        return today.getDate() - 1;
      case "two days ago":
        return today.getDate() - 2;
      case "a week ago":
        return today.getDate() - 7;
      default:
        return today.getDate();
    }
  };

  date.setDate(daysAgo());

  return date;
}
