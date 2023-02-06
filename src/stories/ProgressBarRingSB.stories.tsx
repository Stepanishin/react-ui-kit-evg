import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBarRing from "../ProgressBar/ProgressBarRing/ProgressBarRing";

export default {
  title: "Example/ProgressBar/Progress Bar Ring",
  component: ProgressBarRing,
} as ComponentMeta<typeof ProgressBarRing>;

const Template: ComponentStory<typeof ProgressBarRing> = (args) => (
  <ProgressBarRing {...args} />
);

export const GreenProgressBar = Template.bind({});
GreenProgressBar.args = {
  percent: 75,
  colorFill: "RGB(0,219,0)",
  colorBg: "RGBA(0,219,0,0.4)",
  colorEmpty: "gray",
  size: 50,
  strokeWidth: 4,
};
