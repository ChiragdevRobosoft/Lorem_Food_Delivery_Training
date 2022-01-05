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
  grey5: "rgba(96,96,96,1)",
  grey6: "rgba(133, 132, 132, 0.9)",
  grey7: "rgba(159, 159, 159, 0.9)",
  grey8: "rgba(117, 117, 117, 0.9)",
  grey14: "rgba(148, 148, 148, 0.34)",
  grey15: "rgba(111,111,111,1)",
  orange1: "rgba(247, 135, 19, 1)",
  orange6: "rgba(252, 161, 0,1)",
  black1: "rgba(0, 0, 0, 0.1)",
  blue1: "rgba(34,49,54,1)",
  green1: "rgba(95,183,0,1)",
  red1: "rgba(255,13,13,1)",
};

export const sizes = {
  fullWidth: "100%",
  halfWidth: "50%",
  width35p: "35%",
  sizeNeg0_24: "-0.24px",
  sizeNeg7: "-7px",
  size0: "0",
  size1: "1px",
  size2: "2px",
  size4: "4px",
  size6: "6px",
  size9: "9px",
  size10: "10px",
  size14: "14px",
  size12: "12px",
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
