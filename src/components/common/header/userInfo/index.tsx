import styled from "styled-components";
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
  height: 38px;
  width: 105.37px;
  margin: 16px 31.42px 16px 13.18px;
  display: flex;
  flex-direction: row;
`;

const UserPhoto = styled.div`
  height: 38px;
  width: 38.51px;
  background-color: ${colors.grey_d8d8d8};
  border-radius: 50%;
  justify-content: center;
`;
const Users = styled.img`
  height: 38px;
  width: 38.51px;
  border-radius: 50%;
  background-position: center;
`;
const NoUser = styled.img`
  height: ${sizes.size19};
  width: 19.26px;
  margin: 9px 10.13px 10px 9.12px};
`;

const UserName = styled.p`
  margin: 12px 0 7px 8.12px;
  height: ${sizes.size19};
  width: 55.74px;
  color: ${colors.grey_303134};
  font-family: ${fontFamilies.fontFamilyOsSemiBold};
  font-size: ${sizes.size14};
  font-weight: ${fontWeight.weight600};
  letter-spacing: ${letterSpacing.space0_5};
  line-height: ${sizes.size19};
  text-align: right;
`;
