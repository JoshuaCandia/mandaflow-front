import { action } from "@storybook/addon-actions";
import { Toolbar } from "../components/Toolbar";

export default {
  title: "Stories/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  args: {
    onClickPlay: action("Play clicked"),
    onClickPlus: action("Plus clicked"),
    onClickMinus: action("Minus clicked"),
  },
};

export const Primary = {
  args: {
    onClickPlay: action("Play clicked"),
    onClickPlus: action("Plus clicked"),
    onClickMinus: action("Minus clicked"),
  },
};
