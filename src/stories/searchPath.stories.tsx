import { SearchpathProps } from "../components/common/interfaces";
import Searchpath from "../components/common/Searchpath";
import { Story } from "@storybook/react";
import data from "../components/common/constants.json";

export default {
  title: "Search path",
  component: Searchpath,
};

const Template: Story<SearchpathProps> = (args) => <Searchpath {...args} />;

export const SearchPathLightGrey = Template.bind({});
SearchPathLightGrey.args = {
  path: data.searchPath.greatBreakfasts,
  className: "grey-light",
};

export const SearchPathDarkGrey = Template.bind({});
SearchPathDarkGrey.args = {
  path: data.searchPath.greatBreakfasts,
  className: "grey-dark",
};
