import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import Label from "../components/common/label";
import { labelProps } from "../components/common/interfaces";
import { fontFamilies, sizes } from "../variables";
import styled from "styled-components";

export default {
  title: "Label",
  component: Label,
};

const Template: Story<labelProps> = (args) => <Label {...args} />;

const Template2: Story<labelProps> = (args) => <CustomLabel {...args} />;

export const LabelText = Template.bind({});
LabelText.args = {
  content: data.status,
};

export const CustomText = Template2.bind({});
CustomText.args = {
  content: data.status,
};

const CustomLabel = styled(Label)`
  font-family: ${fontFamilies.fontFamilyOsBold};
  font-size: ${sizes.size20};
`;
