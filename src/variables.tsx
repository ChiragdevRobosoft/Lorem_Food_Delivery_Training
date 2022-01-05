export const colors = {
  white: "#ffffff",
  white2: "rgba(225, 225, 225, 1)",
  transparentColor: "transparent",
  pink1: "rgba(226, 17, 67, 0.9)",
  pink2: "rgba(255, 51, 102, 0.8)",
  yellow1: "rgba(255, 176, 58, 0.9)",
  yellow2: "rgba(255, 176, 58, 0.8)",
  yellow3: "rgba(245,166,35,1)",
  grey1: "rgba(151, 151, 151, 0.19)",
  grey2: "rgba(99, 99, 100, 0.7)",
  grey3: "rgba(151, 151, 151, 1)",
  grey4: "rgba(99, 99, 100, 0.7)",
  grey6: "rgba(133, 132, 132, 0.9)",
  grey7: "rgba(159, 159, 159, 0.9)",
  grey8: "rgba(117, 117, 117, 0.9)",
  grey9: "rgba(45,45,45,1)",
  grey10: "rgba(119,119,119,1)",
  grey15: "rgba(111,111,111,1)",
  grey28: "rgba(62,62,62,1)",
  orange1: "rgba(247, 135, 19, 1)",
  black1: "rgba(0, 0, 0, 0.1)",
  blue1: "rgba(34,49,54,1)",
  green1: "rgba(95,183,0,1)",
  red1: "rgba(255,13,13,1)",
};

export const sizes = {
  fullWidth: "100%",
  halfWidth: "50%",
  width35p: "35%",
  sizeNeg7: "-7px",
  size0: "0",
  size1: "1px",
  size2: "2px",
  size4: "4px",
  size6: "6px",
  size9: "9px",
  size10: "10px",
  size12: "12px",
  size14: "14px",
  size16: "16px",
  size17: "17px",
  size19: "19px",
  size19_4: "19.4px",
  size22: "22px",
  size22_41: "22.41px",
  size24: "24px",
  size24_95: "24.95px",
  size27_25: "27.25px",
  size28: "28px",
  size30: "30px",
  size50: "50px",
  size60: "60px",
  size103: "103px",
  size227: "227px",
};

export const angles = {
  angle60: "60deg",
};

export const fontFamilies = {
  fontFamilyBn: "BebasNeue-Regular",
  fontFamilyOs: "OpenSans-Light",
  fontFamilyOsRegular: "OpenSans-Regular",
  fontFamilyOsSemiBold: "OpenSans-SemiBold",
  fontFamilyOsBold: "OpenSans-Bold",
};

export const fontWeight = {
  weight600: "600",
};

export const opacity = {
  opacity0_19: 0.19,
};

export interface RestauarantCardprops {
  card: {
    name: string;
    rating: number;
    address: string;
    variety: string;
    availabilityInfo: string;
    detailsList: string[];
  };
}

export interface restaurantListProps {
  name: string;
  outlets: string;
}
