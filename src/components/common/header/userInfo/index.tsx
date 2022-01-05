import styled from "styled-components";
import { FC } from "react";
import noUser from "./../../../../assets/common/header/noUser.svg";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  letterSpacing,
} from "../../../../variables";
import data from "./../../constants.json";
let loginStatus = false;
const User = () => {
  return (
    <UserInfo>
      <UserPhoto>
        {loginStatus === true ? (
          <Users src="" alt="User" />
        ) : (
          <NoUser src={noUser} alt="No user" />
        )}
      </UserPhoto>
      <UserName>
        {loginStatus === true
          ? `${data.header.userName}`
          : `${data.header.noUser}`}
      </UserName>
    </UserInfo>
  );
};
export default User;

const UserInfo = styled.div`
  height: ${sizes.size38};
  width: ${sizes.size105_37};
  margin: ${sizes.size16} ${sizes.size31_42} ${sizes.size16} ${sizes.size13_18};
  display: flex;
  flex-direction: row;
`;

const UserPhoto = styled.div`
  height: ${sizes.size38};
  width: ${sizes.size38_51};
  background-color: ${colors.grey_d8d8d8};
  border-radius: 50%;
  justify-content: center;
`;
const Users = styled.img`
  height: ${sizes.size38};
  width: ${sizes.size38_51};
  border-radius: 50%;
  background-position: center;
`;
const NoUser = styled.img`
  height: ${sizes.size19};
  width: ${sizes.size19_26};
  margin: ${sizes.size9} ${sizes.size10_13} ${sizes.size10} ${sizes.size9_12};
`;

const UserName = styled.p`
  margin: ${sizes.size12} ${sizes.size0} ${sizes.size7} ${sizes.size8_12};
  height: ${sizes.size19};
  width: ${sizes.size55_74};
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;
