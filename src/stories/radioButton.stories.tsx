import { Story } from "@storybook/react";
import { radioProps } from "../components/common/interfaces";
import Radio from "../components/common/Radio button";
import data from "../components/common/constants.json";

export default {
  title: "Radio Button",
  component: Radio,
};

const Template: Story<radioProps> = (args) => <Radio {...args} />;

export const RadioButtonForTime = Template.bind({});
RadioButtonForTime.args = {
  options: data.radio[0].options,
  name: data.radio[0].name,
};

export const RadioButtonForCost = Template.bind({});
RadioButtonForCost.args = {
  options: data.radio[1].options,
  name: data.radio[1].name,
};
