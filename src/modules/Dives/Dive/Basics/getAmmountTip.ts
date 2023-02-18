import type { Dive } from "common/types";

export default function getAmmountTip(ammount: Dive["weights"]["ammount"]) {
  switch (ammount) {
    case "tooLittle":
      return "Take more weights next time";
    case "tooMuch":
      return "Take less weights next time";
    default:
  }
}
