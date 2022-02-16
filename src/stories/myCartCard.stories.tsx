import { Story } from "@storybook/react";
import data from "./../components/common/constants.json";
import MyCartCard from "../components/common/myCartCard";
import { MyCartCardProps } from "../components/common/interfaces";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "My Cart Card",
  component: MyCartCard,
};

const Template: Story<MyCartCardProps> = ({ ...args }) => (
  <MemoryRouter>
    <MyCartCard {...args} />
  </MemoryRouter>
);

export const NormalCard = Template.bind({});
NormalCard.args = {
  info: data.cartContents.myCart[0],
  index: 1,
};
