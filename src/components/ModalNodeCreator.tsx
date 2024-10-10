import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "./Button";

interface ModalNodeCreatorProps {
  onSubmit: () => void;
}

const nodeType = ["demo 1", "demo 2", "demo 3", "demo 4"];

export function ModalNodeCreator({ onSubmit }: ModalNodeCreatorProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="border-b-2 mb-4">
        <CardTitle>Node Creator</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nodeType">Tipo de nodo</Label>
            <Select>
              <SelectTrigger id="nodeType">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent position="popper" className="capitalize">
                {nodeType.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onSubmit}>Agregar</Button>
      </CardFooter>
    </Card>
  );
}
