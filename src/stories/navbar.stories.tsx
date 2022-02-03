import Navbar from "../components/common/Navbar";
import { Story } from "@storybook/react";
import { NavbarProps } from "../components/common/interfaces";
import data from "../components/common/constants.json";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Navbar",
  component: Navbar,
};

const Template: Story<NavbarProps> = (args) => (
  <MemoryRouter>
    <Navbar {...args} />
  </MemoryRouter>
);

export const NavbarForRestaurantDetails = Template.bind({});
NavbarForRestaurantDetails.args = {
  navbarElements: data.NavbarElements,
  navbarType: "restaurant-details",
  path: "/The-Boutique-Kitchen",
};

export const NavbarForProfile = Template.bind({});
NavbarForProfile.args = {
  navbarElements: data.ProfileNavbarElements,
};
