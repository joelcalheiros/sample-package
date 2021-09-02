import { Story, Meta } from "@storybook/react";
import React from "react";
import TestComponent from "./TestComponent";
import Props from "./TestComponent.types";

export default {
  title: "Sprint41/DetailTitle",
  component: TestComponent,
  parameters: {
    jest: ["TestComponent.test.tsx"],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <TestComponent {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  title: "Test Component",
};
