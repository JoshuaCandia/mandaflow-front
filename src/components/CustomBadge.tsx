import { Badge } from "@/components/ui/badge";
import React from "react";

interface CustomBadgeProps {
  variant: "default" | "secondary" | "destructive" | "outline";
  onClick?: () => void;
  type?: "error" | "instruction" | "info" | "success";
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({
  variant,
  type,
  onClick,
}) => {
  if (type === "error") {
    return <Badge variant={variant}>Error</Badge>;
  }
  return <Badge variant={variant}>Broke</Badge>;
};
