import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { CustomButton } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <p className="mb-2 font-medium">Date picker</p>
      <Popover>
        <PopoverTrigger asChild>
          <CustomButton
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <article className="flex w-full justify-between items-center">
              {date ? format(date, "PPP") : <span>Fecha</span>}
              <CalendarIcon className=" h-5 w-5" />
            </article>
          </CustomButton>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
