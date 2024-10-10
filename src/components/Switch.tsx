import React from "react";
import { Label } from "./ui/label";
import { CustomSwitch } from "./ui/switch";

interface SwitchProps {
  /**
   * The color of the switch
   */
  color?: "primary" | "secondary";

  /**
   * The state of the switch
   */
  checked?: boolean;
  /**
   * The function to execute when the switch is clicked
   */
  onChange?: () => void;
  /**
   * The label of the switch
   */
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  color,
  onChange,
  label,
}) => {
  return (
    <>
      <p className="mb-2 font-medium">Switch</p>
      <div className="flex items-center whitespace-nowrap rounded-md text-sm  h-10 py-2 w-[280px] justify-between text-left font-normal text-muted-foreground">
        <Label className="text-gray-400 font-normal text-md" htmlFor="switch">
          {label}
        </Label>
        <CustomSwitch
          checked={checked}
          color={color}
          onChange={onChange}
          id="switch"
        />
      </div>
    </>
  );
};
