import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button";

export default {
  title: "Stories/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    type: { control: { type: "select", options: ["start", "end"] } },
  },
  args: { onClick: action("clicked") },
};

export const Start = {
  args: {
    variant: "start",
    label: "START",
  },
};

export const End = {
  args: {
    variant: "end",
    label: "END",
  },
};
