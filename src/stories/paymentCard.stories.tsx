import PaymentCard from "../components/common/paymentCard";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { PaymentCardDetailsProps } from "../components/common/interfaces";

export default {
  title: "Payment Card",
  component: PaymentCard,
};

const Template: Story<{ cardDetails: PaymentCardDetailsProps }> = (args) => (
  <PaymentCard {...args} />
);

export const PrimaryPaymentCard = Template.bind({});
PrimaryPaymentCard.args = {
  cardDetails: data.PaymentCardDetails[0],
};

export const OtherPaymentCard = Template.bind({});
OtherPaymentCard.args = {
  cardDetails: data.PaymentCardDetails[1],
};
