import InputField from "../components/common/textbox";
import data from "../components/common/constants.json";
import { Story } from "@storybook/react";
import { InputFieldProps } from "../components/common/interfaces";

export default {
  title: "Input Field",
  component: InputField,
};

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

const Template2: Story<InputFieldProps> = (args) => (
  <div style={{ width: "300px" }}>
    <InputField {...args} />
  </div>
);

export const InputFieldText = Template.bind({});
InputFieldText.args = {
  name: data.status,
  isPassword: false,
};

export const InputFieldPassword = Template.bind({});
InputFieldPassword.args = {
  name: data.status,
  isPassword: true,
};

export const InputFieldWithParentWidth = Template2.bind({});
InputFieldWithParentWidth.args = {
  name: data.status,
  isPassword: false,
};
