import Dropdown from "../components/common/Dropdown";
import { DropdownProps } from "../components/common/interfaces";
import ArrowUp from "../assets/common/dropdown/long-arrow-pointing-up.png";
import ArrowDown from "../assets/common/dropdown/long-arrow-pointing-down.png";
import { Story } from "@storybook/react";
import data from "../components/common/constants.json";

export default {
  title: "Dropdown",
  component: Dropdown,
};
const images = [ArrowUp, ArrowDown];
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DropdownWithoutArrow = Template.bind({});
DropdownWithoutArrow.args = {
  name: data.dropdownData.list.title,
  options: data.dropdownData.list.contents.map((content) => {
    return { content: content, image: null };
  }),
};

export const DropdownWithArrow = Template.bind({});
DropdownWithArrow.args = {
  name: data.dropdownData.list.title,
  options: data.dropdownData.list.contents.map((content) => {
    return { content: content, image: null };
  }),
  arrow: true,
};

export const DropdownWithImage = Template.bind({});
DropdownWithImage.args = {
  name: data.dropdownData.sort.title,
  options: data.dropdownData.sort.contents.map((content, index) => {
    return { content: content, image: images[index] };
  }),
};

export const DropdownWithSemibold = Template.bind({});
DropdownWithSemibold.args = {
  name: data.dropdownData.list.title,
  options: data.dropdownData.list.contents.map((content) => {
    return { content: content, image: null };
  }),
  className: "semibold",
};
