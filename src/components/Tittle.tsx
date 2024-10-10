import React from "react";

interface TittleProps {
  tittle?: string;
  subtittle?: string;
}

export const Tittle: React.FC<TittleProps> = ({ tittle, subtittle }) => {
  return (
    <article className="flex flex-col gap-2 text-gray-700">
      <span className="font-bold text-lg">{tittle}</span>
      <span className="text-md">{subtittle}</span>
    </article>
  );
};
