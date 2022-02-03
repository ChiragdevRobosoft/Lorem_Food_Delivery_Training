import CartCard from "../components/common/CartCard";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { foodItemProps } from "../components/common/interfaces";

export default {
  title: "Cart Card",
  component: CartCard,
  argTypes: {
    parentWidth: { type: "string", defaulValue: "100%" },
  },
};

const Template: Story<{ item: foodItemProps; parentWidth: string }> = ({
  parentWidth,
  ...args
}) => (
  <div style={{ width: `${parentWidth}` }}>
    <CartCard {...args} />
  </div>
);

export const FullWidthCard = Template.bind({});
FullWidthCard.args = {
  item: data.foodcardDetails.recommended[0],
};

export const CardWithParentWidth = Template.bind({});
CardWithParentWidth.args = {
  item: data.foodcardDetails.recommended[0],
  parentWidth: "270px",
};

export const CardWithoutAddOn = Template.bind({});
CardWithoutAddOn.args = {
  item: data.foodcardDetails.appetizers[0],
  parentWidth: "270px",
};

export const CardWithoutCustomize = Template.bind({});
CardWithoutCustomize.args = {
  item: data.foodcardDetails.recommended[1],
  parentWidth: "270px",
};
