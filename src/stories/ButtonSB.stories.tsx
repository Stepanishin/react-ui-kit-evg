import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button/Button/Button";

export default {
  title: "Example/Button/Button Simple",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonSimple = Template.bind({});
ButtonSimple.args = {
  label: "Button",
  onClick: () => console.log("Button clicked"),
  disabled: false,
  height: "40px",
  width: "100px",
  color: "#fff",
  backgroundColor: "#fd510c",
  hoverColor: "#fff",
  hoverBackgroundColor: "#b13808",
  borderRadius: "5px",
};
