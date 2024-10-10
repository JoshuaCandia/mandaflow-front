import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputMinMaxProps {
  onChange: (min: string, max: string) => void;
  label?: string;
  isMoney?: boolean;
}

export const InputMinMax: React.FC<InputMinMaxProps> = ({
  onChange,
  label,
  isMoney,
}) => {
  const [min, setMin] = React.useState<string>("");
  const [max, setMax] = React.useState<string>("");

  const isNumeric = (value: string) => {
    const numericValue = isMoney ? value.replace(/^\$/, "") : value;
    return !isNaN(Number(numericValue)) && numericValue.trim() !== "";
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Si solo queda el "$", permite eliminarlo también
    if (isMoney && value === "$") {
      value = "";
    }

    if (isNumeric(value) || value === "") {
      if (isMoney && value && !value.startsWith("$")) {
        value = `$${value}`;
      }
      setMin(value);
      onChange(value, max);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Si solo queda el "$", permite eliminarlo también
    if (isMoney && value === "$") {
      value = "";
    }

    if (isNumeric(value) || value === "") {
      if (isMoney && value && !value.startsWith("$")) {
        value = `$${value}`;
      }
      setMax(value);
      onChange(min, value);
    }
  };

  return (
    <article className="flex flex-col gap-2">
      <Label htmlFor="min">{label}</Label>
      <div className="flex gap-2 justify-center items-center w-full">
        <Input
          value={min}
          id="min"
          onChange={handleMinChange}
          placeholder="Mínimo"
        />
        <span className="font-bold">-</span>
        <Input
          value={max}
          id="max"
          onChange={handleMaxChange}
          placeholder="Máximo"
        />
      </div>
    </article>
  );
};
