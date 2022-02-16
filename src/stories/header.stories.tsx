import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/common/header";
import { headerProps } from "../components/common/interfaces";

export default {
  title: "Header",
  component: Header,
};

const Template: Story<headerProps> = ({ ...args }) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const HeaderHomePage = Template.bind({});
HeaderHomePage.args = {
  className: "home",
};

export const HeaderLoggedIn = Template.bind({});
HeaderHomePage.args = {
  className: "loggedin",
};
