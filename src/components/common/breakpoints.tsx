export const breakpoints = {
  small: "375px",
  tablet: "768px",
  tabletLandscape: "1024px",
  desktop: "1280px",
  wide: "1440px",
};

export const queries = {
  smallMobile: `@media screen and (max-width: ${breakpoints.small})`,
  mobile: `@media screen and (min-width: ${breakpoints.small}) and (max-width: ${breakpoints.tablet})`,
  tablet: `@media screen and (max-width: ${breakpoints.tablet})`,
  tabletLandscape: `@media screen and (max-width: ${breakpoints.tabletLandscape})`,
  desktopMd: `@media screen and (max-width: ${breakpoints.desktop})`,
  desktopWide: `@media screen and (max-width: ${breakpoints.wide})`,
};
