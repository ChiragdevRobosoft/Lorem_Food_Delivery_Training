export const colors = {
  white: "#ffffff",
  white2: "rgba(225, 225, 225, 1)",
  transparentColor: "transparent",
  pink1: "rgba(226, 17, 67, 0.9)",
  pink2: "rgba(255, 51, 102, 0.8)",
  pink3: "rgba(242, 115, 138, 1)",
  yellow1: "rgba(255, 176, 58, 0.9)",
  yellow2: "rgba(255, 176, 58, 0.8)",
  yellow3: "rgba(245,166,35,1)",
  grey1: "rgba(151, 151, 151, 0.19)",
  grey2: "rgba(99, 99, 100, 0.7)",
  grey3: "rgba(151, 151, 151, 1)",
  grey4: "rgba(63, 63, 64, 1)",
  grey5: "rgba(96,96,96,1)",
  grey6: "rgba(133, 132, 132, 0.9)",
  grey7: "rgba(159, 159, 159, 0.9)",
  grey8: "rgba(117, 117, 117, 0.9)",
  grey9: "rgba(45,45,45,1)",
  grey10: "rgba(119,119,119,1)",
  grey11: "rgba(27, 28, 29,1)",
  grey12: "rgba(94, 94, 94,1)",
  grey13: "rgba(158, 153, 153,1)",
  grey14: "rgba(148, 148, 148, 0.34)",
  grey15: "rgba(111,111,111,1)",
  grey16: "rgba(99, 99, 100, 1)",
  grey17: "rgba(48, 49, 52,1)",
  grey18: "rgba(74, 74, 74,1)",
  orange1: "rgba(247, 135, 19, 1)",
  orange2: "rgba(245, 124, 0,1)",
  orange3: "rgba(250, 163, 105, 1)",
  orange4: "rgba(245, 134, 123, 1)",
  orange5: "rgba(249, 159, 108, 1)",
  orange6: "rgba(252, 161, 0,1)",
  black1: "rgba(0, 0, 0, 0.1)",
  black2: "rgba(0,0,0,1)",
  blue1: "rgba(34,49,54,1)",
  green1: "rgba(95,183,0,1)",
  red1: "rgba(255,13,13,1)",
  red2: "rgba(246, 126, 126, 0.38)",
  violet1: "rgba(241, 243, 251,1)",
};

export const sizes = {
  fullWidth: "100%",
  width90p: "90%",
  width70p: "70%",
  halfWidth: "50%",
  width35p: "35%",
  sizeNeg0_48: "-0.48px",
  sizeNeg0_27: "-0.27px",
  sizeNeg0_24: "-0.24px",
  sizeNeg0_18: "-0.18px",
  sizeNeg7: "-7px",
  size0: "0",
  size1: "1px",
  size2: "2px",
  size4: "4px",
  size4_5: "4.5px",
  size5: "5px",
  size6: "6px",
  size7: "7px",
  size7_22: "7.22px",
  size8_42: "8.42px",
  size8_88: "8.88px",
  size9: "9px",
  size10: "10px",
  size11: "11px",
  size11_44: "11.44px",
  size12: "12px",
  size12_72: "12.72px",
  size14: "14px",
  size15: "15px",
  size15_28: "15.28px",
  size15_73: "15.73px",
  size15_92: "15.92px",
  size16: "16px",
  size17: "17px",
  size18: "18px",
  size19: "19px",
  size19_4: "19.4px",
  size20: "20px",
  size21: "21px",
  size22: "22px",
  size22_41: "22.41px",
  size24: "24px",
  size24_95: "24.95px",
  size25: "25px",
  size27: "27px",
  size27_25: "27.25px",
  size28: "28px",
  size30: "30px",
  size34: "34px",
  size43_6: "43.6px",
  size45: "45px",
  size50: "50px",
  size52: "52px",
  size60: "60px",
  size70: "70px",
  size79: "79px",
  size103: "103px",
  size141: "141px",
  size166_79: "166.79px",
  size187: "187px",
  size227: "227px",
  size265: "265px",
  size304: "304px",
  size672: "672px",
  size631_42: "631.42px",
};

export const angles = {
  angle60: "60deg",
  angle90: "90deg",
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

export const links = {
  home: "/",
  restaurantList: "restaurant-list",
  brands: "/brands",
};

export interface radioProps {
  value: string;
  name: string;
  options: string[];
  handleChange: React.MouseEventHandler<HTMLInputElement>;
}

export interface DropdownProps {
  options: { content: string; image: string | null }[];
  name: string;
}

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
