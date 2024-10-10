import { action } from "@storybook/addon-actions";
import React from "react";
import { InfoTag } from "../components/InfoTag";

export default {
  title: "Stories/InfoTag",
  component: InfoTag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select", options: ["instruction", "error", "success"] },
      labelInstruction: { control: "text" },
      iconInstruction: { control: React.Component },
    },
  },
  args: { onHover: action("Hovered"), variant: "instruction" },
};

export const Error = {
  args: {
    variant: "error",
    onHover: action("Hovered"),
  },
};

export const Success = {
  args: {
    variant: "success",
    onHover: action("Hovered"),
  },
};

export const Instruction = {
  args: {
    variant: "instruction",
    onHover: action("Hovered"),
    labelInstruction: "Validación de score mínimo",
  },
};
