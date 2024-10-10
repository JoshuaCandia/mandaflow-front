import { action } from "@storybook/addon-actions";
import { ModalNodeCreator } from "../components/ModalNodeCreator";

export default {
  title: "Stories/ModalNodeCreator",
  component: ModalNodeCreator,
  parameters: {
    layout: "centered",
  },
  args: {
    onclick: action("clicked"),
  },
};

export const Primary = {
  args: {},
};
