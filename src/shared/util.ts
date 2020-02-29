import { subjectColors } from 'shared/colors';
import DEFAULT_ICON from 'assets/icons/onlineTestIcon.svg';
import MATH_ICON from 'assets/icons/mathIcon.svg';
import PHYSICS_ICON from 'assets/icons/physicsIcon.svg';
import IT_ICON from 'assets/icons/itIcon.svg';
import ECONOMY_ICON from 'assets/icons/economyIcon.svg';
import NETWORK_ICON from 'assets/icons/networkIcon.svg';

export function courseCardDeterminator(code: string) {
  let icon = DEFAULT_ICON;
  let color = subjectColors.default;
  if (code.toUpperCase().includes('TFY')) {
    return { color: subjectColors.math, icon: PHYSICS_ICON };
  } else if (code.toUpperCase().includes('TIØ')) {
    return { color: subjectColors.economy, icon: ECONOMY_ICON };
  } else if (code.toUpperCase().includes('TMA')) {
    return { color: subjectColors.math, icon: MATH_ICON };
  } else if (code.toUpperCase().includes('TDT')) {
    return { color: subjectColors.it, icon: IT_ICON };
  } else if (code.toUpperCase().includes('TTM')) {
    return { color: subjectColors.it, icon: NETWORK_ICON };
  } else {
    return { color, icon };
  }
}
