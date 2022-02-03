import RestaurantCard from "../components/common/restaurantCard";
import { Story } from "@storybook/react";
import { RestauarantCardprops } from "../components/common/interfaces";
import data from "../components/common/constants.json";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Restaurant Card",
  component: RestaurantCard,
};

const Template: Story<RestauarantCardprops> = (args) => (
  <MemoryRouter>
    <RestaurantCard {...args} />
  </MemoryRouter>
);

export const RestaurantCardAvailabilityStatusOpen = Template.bind({});
RestaurantCardAvailabilityStatusOpen.args = {
  card: data.restaurantCardData[0],
};

export const RestaurantCardAvailabilityStatusClosed = Template.bind({});
RestaurantCardAvailabilityStatusClosed.args = {
  card: data.restaurantCardData[1],
};
