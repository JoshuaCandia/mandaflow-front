import { Tittle } from "../components/Tittle";

export default {
  tittle: "Stories/Tittle",
  component: Tittle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tittle: { control: "text" },
    subtittle: { control: "text" },
  },
  args: {
    tittle: "Tittle lorem ipsum",
    subtittle: "Subtittle lorem ipsum lorem ipsum.",
  },
};

export const Default = {
  args: {
    tittle: "Tittle lorem ipsum",
    subtittle: "Subtittle lorem ipsum lorem ipsum.",
  },
};
