import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import Buttons from "../components/common/button";
import { buttonProps } from "../components/common/interfaces";
import styled from "styled-components";
import { colors } from "../variables";

export default {
  title: "Button",
  component: Buttons,
};

const Template: Story<buttonProps> = (args) => <Buttons {...args} />;

const Template2: Story<buttonProps> = (args) => <CustomButton {...args} />;

export const GoogleButton = Template2.bind({});
GoogleButton.args = {
  name: data.AddNew,
};

export const colouredBackgroundButton = Template.bind({});
colouredBackgroundButton.args = {
  name: data.AddNew,
  className: "colouredBgButton",
};

const CustomButton = styled(Buttons)`
  color: ${colors.pink_d34836};
  height: 50px;
  width: 180px;
  border: 1px solid ${colors.pink_ff8c7d};
  box-shadow: 0 2px 10px 0 ${colors.black_000000_1};
`;
