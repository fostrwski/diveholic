import type { Dive } from 'common/types';

export default function getAmmountText(ammount: Dive['weights']['ammount']) {
  switch (ammount) {
    case 'tooLittle':
      return 'Too little weights';
    case 'tooMuch':
      return 'Too much weights';
    default:
      return 'Perfect weights ammount';
  }
}
