import { Story } from "@storybook/react";
import DeliveryRating from "../components/common/DeliveryRating";
import { DeliveryRatingProps } from "../components/common/interfaces";

export default {
  title: "Delivery Rating",
  component: DeliveryRating,
};

const Template: Story<DeliveryRatingProps> = (args) => (
  <DeliveryRating {...args} />
);

export const DeliveryRatingWithLowerRate = Template.bind({});
DeliveryRatingWithLowerRate.args = {
  RatingNum: 2,
};

export const DeliveryRatingWithIntermediateRate = Template.bind({});
DeliveryRatingWithIntermediateRate.args = {
  RatingNum: 3,
};

export const DeliveryRatingWithHigherRate = Template.bind({});
DeliveryRatingWithHigherRate.args = {
  RatingNum: 4,
};

export const DeliveryRatingWithReverseColor = Template.bind({});
DeliveryRatingWithReverseColor.args = {
  RatingNum: 1,
  className: "reverse-color",
};

export const DeliveryRatingWithClickEvent = Template.bind({});
DeliveryRatingWithClickEvent.args = {
  RatingNum: 5,
  className: "clickable",
  id: "rating5",
};
