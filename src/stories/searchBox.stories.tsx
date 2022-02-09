import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { SearchBoxProps } from "../components/common/interfaces";
import SearchBoxComp from "../components/common/searchBox";

export default {
  title: "Search Box",
  component: SearchBoxComp,
};

const Template: Story<SearchBoxProps> = ({ ...args }) => (
  <MemoryRouter>
    <SearchBoxComp {...args} />
  </MemoryRouter>
);

export const SearchBoxHomePage = Template.bind({});
SearchBoxHomePage.args = {
  className: "home",
};

export const SearchBoxOther = Template.bind({});
SearchBoxOther.args = {
  className: "screen",
};
