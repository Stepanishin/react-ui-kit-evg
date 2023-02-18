import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBarSquare from "../ProgressBar/ProgressBarSquare/ProgressBarSquare";

export default {
  title: "Example/ProgressBar/Progress Bar Square",
  component: ProgressBarSquare,
} as ComponentMeta<typeof ProgressBarSquare>;

const Template: ComponentStory<typeof ProgressBarSquare> = (args) => (
  <ProgressBarSquare {...args} />
);

export const GreenProgressBarSquare = Template.bind({});
GreenProgressBarSquare.args = {
  percent: 75,
  colorFill: "RGB(0,219,0)",
  colorBg: "RGBA(0,219,0,0.4)",
  height: 10,
};
