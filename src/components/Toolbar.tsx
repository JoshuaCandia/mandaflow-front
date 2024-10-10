import { Minus, Play, Plus } from "lucide-react";
import React from "react";
import { Button } from "./Button";

interface ToolbarProps {
  onClickPlay: () => void;
  onClickPlus: () => void;
  onClickMinus: () => void;
}

export function Toolbar({
  onClickPlay,
  onClickMinus,
  onClickPlus,
}: ToolbarProps) {
  return (
    <div className="flex p-1 border-2 rounded-lg">
      <Button className="w-14 h-8" variant="ghost" onClick={onClickPlay}>
        <Play className="h-4 w-6" />
      </Button>
      <Button className="w-14 h-8" variant="ghost" onClick={onClickPlus}>
        <Plus className="h-4 w-6" />
      </Button>
      <Button className="w-14 h-8" variant="ghost" onClick={onClickMinus}>
        <Minus className="h-4 w-6" />
      </Button>
    </div>
  );
}
