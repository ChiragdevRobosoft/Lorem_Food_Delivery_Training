import styled from "styled-components";
import React, { FC } from "react";
import noUser from "./../../../../assets/common/header/noUser.svg";
import {
  sizes,
  colors,
  angles,
  fontFamilies,
  fontWeight,
  letterSpacing,
} from "../../../../variables";
import data from "./../../constants.json";
let loginStatus = false;
const User = () => {
  return (
    <UserInfo>
      <UserImageDiv>
        {loginStatus === true ? (
          <UserImg src="" alt="User" />
        ) : (
          <NoUserImg src={noUser} alt="No user" />
        )}
      </UserImageDiv>
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

const UserImageDiv = styled.div`
  height: ${sizes.size38};
  width: ${sizes.size38_51};
  background-color: ${colors.grey14};
  border-radius: 50%;
  justify-content: center;
`;
const UserImg = styled.img`
  height: ${sizes.size38};
  width: ${sizes.size38_51};
  border-radius: 50%;
  background-position: center;
`;
const NoUserImg = styled.img`
  height: ${sizes.size19};
  width: ${sizes.size19_26};
  margin: 9px 10.13px 10px 9.12px;
`;

const UserName = styled.p`
  margin: ${sizes.size12} ${sizes.size0} ${sizes.size7} 8.12px;
  height: ${sizes.size19};
  width: ${sizes.size55_74};
  color: ${colors.grey8};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;
