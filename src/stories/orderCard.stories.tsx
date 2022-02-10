import OrderCard from "../components/common/orderCard";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { orderCardProps } from "../components/common/interfaces";

export default {
  title: "Order Card",
  component: OrderCard,
};

const Template: Story<{ cardDetails: orderCardProps }> = (args) => (
  <OrderCard {...args} />
);

export const OutForOrder = Template.bind({});
OutForOrder.args = {
  cardDetails: data.orderCardData[0],
};

export const InKitchen = Template.bind({});
InKitchen.args = {
  cardDetails: data.orderCardData[1],
};
