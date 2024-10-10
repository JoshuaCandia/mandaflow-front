import { action } from "@storybook/addon-actions";
import { CustomBadge } from "../components/CustomBadge";

export default {
  title: "Stories/CustomBadge",
  component: CustomBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "secondary", "destructive", "outline"],
      },
    },
    variant: {
      control: { type: "select", options: ["default", "primary", "secondary"] },
    },
    label: { control: "text" },
  },
  args: { onClick: action("clicked") },
};

export const Error = {
  args: {
    type: "error",
    variant: "destructive",
    label: "START",
  },
};
