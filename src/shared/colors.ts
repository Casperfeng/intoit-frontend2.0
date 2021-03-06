const DEFAULT_BLUE_COLOR = '#0CAAD6';
const BLUE_700_COLOR = '#0288D1';
const GREEN_COLOR = '#009688';
const RED_COLOR = '#9A0007';
const YELLOW_COLOR = '#FBBC00';
const PURPLE_COLOR = '#6C63FF';
const GREY_COLOR = '#979797';
const LIGHT_GREY_COLOR = '#DADADA';
const BLACK_LIGHT_COLOR = '#2B3648';
const BLUE_GREY_COLOR = '#37474F';
const FADED_DEFAULT_COLOR = 'rgba(12, 170, 214, 0.5)';
const CORRECT_COLOR = '#38C05D';
const ERROR_COLOR = '#F47265';

const colors = {
  default: DEFAULT_BLUE_COLOR,
  primary: DEFAULT_BLUE_COLOR,
  interactive: BLUE_700_COLOR,
  green: GREEN_COLOR,
  red: RED_COLOR,
  yellow: YELLOW_COLOR,
  purple: PURPLE_COLOR,
  grey: GREY_COLOR,
  lightGrey: LIGHT_GREY_COLOR,
  blackLight: BLACK_LIGHT_COLOR,
  blueGrey: BLUE_GREY_COLOR,
  correct: CORRECT_COLOR,
  error: ERROR_COLOR,
};

export const subjectColors = {
  default: DEFAULT_BLUE_COLOR,
  it: GREEN_COLOR,
  math: RED_COLOR,
  economy: YELLOW_COLOR,
};

export const iconColors = {
  default: BLUE_GREY_COLOR,
  clicked: DEFAULT_BLUE_COLOR,
};

export const buttonColors = {
  default: FADED_DEFAULT_COLOR,
  clicked: DEFAULT_BLUE_COLOR,
};

export default colors;
