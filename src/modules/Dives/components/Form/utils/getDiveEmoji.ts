import type { Dive } from 'common/types';

export default function getDiveEmoji(diveType: Dive['type']) {
  switch (diveType) {
    case 'Boat':
      return '🛥';
    case 'Shore':
      return '🏝';
    default:
      return '🤿';
  }
}
