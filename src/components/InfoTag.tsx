import { TriangleAlert, Trophy } from "lucide-react";
import React from "react";

interface InfoTagProps {
  variant: "instruction" | "error" | "success";
  onHover?: () => void;
  labelInstruction?: string;
  iconInstruction?: React.ReactNode;
}

export const InfoTag: React.FC<InfoTagProps> = ({
  variant,
  onHover,
  labelInstruction,
  iconInstruction,
}) => {
  let className = "";

  // Definimos las clases según la variante
  switch (variant) {
    case "instruction":
      className =
        "bg-white-100 border border-primary text-black px-4 py-3 rounded-lg";
      break;
    case "error":
      className =
        "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded";
      break;
    case "success":
      className =
        "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded";
      break;
  }

  return (
    <div
      className={`${className} flex gap-2`}
      role="alert"
      onMouseOver={onHover}
    >
      <span>
        {variant === "instruction" && iconInstruction
          ? iconInstruction
          : variant === "instruction" && "add_icon"}
        {variant === "error" && <TriangleAlert />}
        {variant === "success" && <Trophy />}
      </span>

      <span className="block sm:inline font-medium">
        {variant === "instruction" && labelInstruction}
        {variant === "error" && "Broke"}
        {variant === "success" && "Success Message"}
      </span>
    </div>
  );
};
