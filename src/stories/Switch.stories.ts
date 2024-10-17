import { action } from "@storybook/addon-actions";
import { Switch } from "../components/Switch";

export default {
  title: "Stories/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: { onChange: action("clicked") },
};

export const Default = {
  args: {
    onChange: action("changed"),
    color: "primary",
    label: "Lorem Ipsum",
  },
};
