import Image from "../components/common/image";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { ImageProps } from "../components/common/interfaces";
import Avatar from "../assets/EditProfile/icn_donut.png";

export default {
  title: "Image",
  component: Image,
};

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const ImageComponent = Template.bind({});
ImageComponent.args = {
  src: Avatar,
};
