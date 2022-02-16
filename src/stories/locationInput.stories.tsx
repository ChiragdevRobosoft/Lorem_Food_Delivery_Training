import { Story } from "@storybook/react";
import { locationInputProps } from "../components/common/interfaces";
import LocationInput from "../components/common/locationInput";

export default {
  title: "Location Input",
  component: LocationInput,
};

const Template: Story<locationInputProps> = ({ ...args }) => (
  <LocationInput {...args} />
);

export const LocationInputHomePage = Template.bind({});
LocationInputHomePage.args = {
  className: "home",
};

export const LocationInputOther = Template.bind({});
LocationInputOther.args = {
  className: "newSec",
};

export const LocationInputWithValue = Template.bind({});
LocationInputWithValue.args = {
  className: "newSec",
  locationVal: "Dubai",
};
