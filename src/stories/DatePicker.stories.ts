import { action } from "@storybook/addon-actions";
import { DatePicker } from "../components/DatePicker";

export default {
  title: "Stories/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
  args: { onChange: action("clicked") },
};

export const Default = {
  args: {
    onChange: action("changed"),
  },
};
