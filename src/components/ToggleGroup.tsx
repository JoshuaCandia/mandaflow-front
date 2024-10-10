import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";
import { Label } from "@radix-ui/react-label";

export function ToggleGroupComponent({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-gray-900 font-medium text-md" htmlFor="switch">
        {label ?? "Toggle group*"}
      </Label>
      <ToggleGroup variant="outline" type="multiple">
        <ToggleGroupItem size="lg" value="bold" aria-label="Toggle bold">
          <span className="text-gray-400 text-lg">3</span>
        </ToggleGroupItem>
        <ToggleGroupItem size="lg" value="italic" aria-label="Toggle italic">
          <span className="text-gray-400 text-lg">6</span>
        </ToggleGroupItem>
        <ToggleGroupItem size="lg" value="italic" aria-label="Toggle italic">
          <span className="text-gray-400 text-lg">9</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          size="lg"
          value="underline"
          aria-label="Toggle underline"
        >
          <span className="text-gray-400 text-lg">12</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
