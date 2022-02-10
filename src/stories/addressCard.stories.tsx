import AddressCard from "../components/common/addressCard";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { AddressCardDetailsProps } from "../components/common/interfaces";

export default {
  title: "Address Card",
  component: AddressCard,
};

const Template: Story<{ cardDetails: AddressCardDetailsProps }> = (args) => (
  <AddressCard {...args} />
);

export const PrimaryAddressCard = Template.bind({});
PrimaryAddressCard.args = {
  cardDetails: data.addressCardDetails[0],
};

export const OtherAddressCard = Template.bind({});
OtherAddressCard.args = {
  cardDetails: data.addressCardDetails[1],
};
