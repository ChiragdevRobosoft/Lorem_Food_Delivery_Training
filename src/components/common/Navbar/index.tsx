import React, { useState, FC } from "react";
import styled from "styled-components";
import { colors, sizes, fontFamilies, angles } from "../../../variables";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Navbar: FC<{
  navbarElements: string[];
  navbarType?: string;
  path?: string;
}> = ({ navbarElements, navbarType, path }) => {
  const location = useLocation();
  const params = useParams();
  const [selected, setSelected] = useState(
    location.pathname
      .replace(`/${params.id}`, "")
      .slice(1)
      .toUpperCase()
      .split("-")
      .join(" ")
  );
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setSelected((e.target as HTMLElement).innerText);
  };
  return (
    <NavBar>
      {navbarElements.map((navbarElement, index) => {
        return (
          <Navlink
            to={`${navbarElement.split(" ").join("-").toLowerCase()}${
              path !== undefined ? path : ""
            }`}
            key={index}
          >
            <NavBarElement
              className={navbarElement === selected ? "select" : undefined}
              onClick={handleClick}
              navbarType={navbarType}
            >
              {navbarElement}
              {navbarElement === selected ? <Underline></Underline> : null}
            </NavBarElement>
          </Navlink>
        );
      })}
    </NavBar>
  );
};

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const NavBarElement = styled.li<{ navbarType?: string }>`
  margin-right: 60px;
  list-style: none;
  height: 19px;
  color: ${(props) =>
    props.navbarType === "restaurant-details"
      ? `${colors.grey_1f1f1f}`
      : `${colors.white_ffffff}`};
  font-family: ${(props) =>
    props.className === "select"
      ? `${fontFamilies.fontFamilyOsBold}`
      : `${fontFamilies.fontFamilyOsSemiBold}`};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size19};
`;

const Underline = styled.div`
  height: 4px;
  width: 38px;
  margin-top: 11px;
  border-radius: 2px;
  background-image: linear-gradient(
    ${angles.angle138_33},
    ${colors.red_f3698e} 0%,
    ${colors.yellow_feb456} 100%
  );
  box-shadow: ${sizes.size0} ${sizes.size4} ${sizes.size10} ${sizes.size0}
    ${colors.red_f67e7e_38};
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
`;
export default Navbar;
