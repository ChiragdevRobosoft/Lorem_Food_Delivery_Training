import FoodCard from "../components/common/FoodCard";
import { Story } from "@storybook/react";
import { foodItemProps } from "../components/common/interfaces";
import data from "../components/common/constants.json";

export default {
  title: "Food card",
  component: FoodCard,
};

const Template: Story<{ cardDetails: foodItemProps }> = (args) => (
  <FoodCard {...args} />
);

export const FoodCardWithImage = Template.bind({});
FoodCardWithImage.args = {
  cardDetails: data.foodcardDetails.recommended[0],
};

export const FoodCardWithoutCustomizable = Template.bind({});
FoodCardWithoutCustomizable.args = {
  cardDetails: data.foodcardDetails.appetizers[1],
};

export const FoodCardWithoutImage = Template.bind({});
FoodCardWithoutImage.args = {
  cardDetails: data.foodcardDetails.recommended[2],
};

export const FoodCardWithoutBestseller = Template.bind({});
FoodCardWithoutBestseller.args = {
  cardDetails: data.foodcardDetails.appetizers[0],
};
