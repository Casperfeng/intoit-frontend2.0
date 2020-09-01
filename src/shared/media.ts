const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  wideScreen: '2560px',
};

const devices = {
  mobile: `(min-width: ${sizes.mobileL})`,
  mobileOnly: `(max-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  tabletOnly: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopOnly: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopOnly: `(max-width: ${sizes.desktop})`,
  wideScreen: `(min-width: ${sizes.desktop})`,
  wideScreenOnly: `(min-width: ${sizes.desktop})`,
};

export default devices;
