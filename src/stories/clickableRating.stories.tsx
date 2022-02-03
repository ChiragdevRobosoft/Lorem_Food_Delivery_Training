import ClickableRating from "../components/common/ClickableRating";
import { Story } from "@storybook/react";

export default {
  title: "Clickable Rating",
  component: ClickableRating,
};

const Template: Story<{ title: string; parentWidth: string }> = ({
  parentWidth,
  ...args
}) => (
  <div style={{ width: `${parentWidth}` }}>
    <ClickableRating {...args} />
  </div>
);

export const FoodRatingWithFullWidth = Template.bind({});
FoodRatingWithFullWidth.args = {
  title: "Food",
};

export const FoodRatingwithParentWidth = Template.bind({});
FoodRatingwithParentWidth.args = {
  title: "Food",
  parentWidth: "300px",
};

export const ServiceRating = Template.bind({});
ServiceRating.args = {
  title: "Service",
  parentWidth: "300px",
};
