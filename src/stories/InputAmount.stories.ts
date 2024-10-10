import { action } from "@storybook/addon-actions";
import { InputMinMax } from "../components/InputMinMax";

export default {
  title: "Stories/InputMinMax",
  component: InputMinMax,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
    label: { control: "text" },
    isMoney: { control: "boolean" },
  },
  args: { onChange: action("clicked") },
};

export const Default = {
  args: {
    onChange: action("changed"),
    label: "Monto(Large)*",
  },
};

export const Money = {
  args: {
    onChange: action("changed"),
    label: "Monto(Large)*",
    isMoney: true,
  },
};
