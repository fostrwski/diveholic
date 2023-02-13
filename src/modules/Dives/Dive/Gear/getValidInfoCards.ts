import type { InfoCardProps } from "common/components/InfoCard";

/** @returns array of info cards with non-null content */
export default function getValidInfoCards(infoCards: Array<InfoCardProps>) {
  return infoCards.filter((infoCard: InfoCardProps) => {
    if (infoCard.content === "") return;

    return infoCard;
  });
}
