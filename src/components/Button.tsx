import { CustomButton } from "@/components/ui/button"; // Asegúrate de que la ruta sea correcta
import React, { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  variant?:
    | "secondary"
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "link"
    | "start"
    | "end";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode | string;
  className?: string;
}

const PlayIcon = () => (
  <svg
    width="15.48"
    height="15.48"
    viewBox="0 0 15.48 15.48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.48633 1.93359L12.5143 7.7373L3.48633 13.541V1.93359Z"
      stroke="#FAA275"
      strokeWidth="1.28971"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EndIcon = () => (
  <svg
    width="15.48"
    height="15.48"
    viewBox="0 0 15.48 15.48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.841797 9.43392C0.841797 9.43392 1.48665 8.78906 3.42122 8.78906C5.35579 8.78906 6.64551 10.0788 8.58008 10.0788C10.5146 10.0788 11.1595 9.43392 11.1595 9.43392V1.69564C11.1595 1.69564 10.5146 2.34049 8.58008 2.34049C6.64551 2.34049 5.35579 1.05078 3.42122 1.05078C1.48665 1.05078 0.841797 1.69564 0.841797 1.69564V9.43392ZM0.841797 9.43392V13.9479"
      stroke="#FAA275"
      strokeWidth="1.28971"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Button: FC<ButtonProps> = ({
  onClick,
  type,
  variant,
  children,
  className,
}) => {
  const shadowStyle =
    variant === "start"
      ? {
          boxShadow: "inset 0 15px 15px -8px rgba(251, 181, 146, 1)", // Sombra en la parte superior
          maskImage:
            "radial-gradient(circle at top, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at top, black 40%, transparent 100%)",
        }
      : {
          boxShadow: "inset 0 -15px 15px -8px rgba(251, 181, 146, 1)", // Sombra en la parte inferior
          maskImage:
            "radial-gradient(circle at bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at bottom, black 40%, transparent 100%)",
        };

  const buttonContent = (
    <>
      <article className="flex flex-col justify-center items-center gap-1 relative z-10">
        {variant === "start" && <PlayIcon />}
        {variant === "end" && <EndIcon />}
        <label>
          {variant === "start" && "START"}
          {variant === "end" && "END"}
        </label>
      </article>
    </>
  );

  if (variant === "secondary") {
    return (
      <CustomButton onClick={onClick} type={type} variant="default">
        {children}
      </CustomButton>
    );
  }

  if (variant === "start" || variant === "end") {
    return (
      <button
        type="button"
        className="relative box-border flex flex-col justify-center items-center p-6 gap-1 w-24 h-[92.48px] border border-gray-300/30 rounded-full cursor-pointer"
        style={{
          background:
            "radial-gradient(68.6% 68.6% at 50% 50%, rgba(250, 162, 117, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%), rgba(250, 162, 117, 0.1)",
        }}
        onClick={onClick}
      >
        <span className="absolute inset-0 rounded-full" style={shadowStyle} />
        {buttonContent}
      </button>
    );
  }

  return (
    <CustomButton
      className={className}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {children}
    </CustomButton>
  );
};
