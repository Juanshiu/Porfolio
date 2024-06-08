import React from "react";
import { cn } from "../../utils/cn";
import { Spotlight } from "./acertenity/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] absolute inset-0 w-full rounded-md flex md:items-center md:justify-center -z-[5] overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#FFD700"
      />
      <Spotlight
        className="-top-40 left-0 md:-left-[20rem] md:-top-[10rem]"
        fill="violet"
      />
      <Spotlight
        className="-top-40 left-0 md:left-[60rem] md:-top-[10rem]"
        fill="#63ff88"
      />
      <Spotlight
        className="-top-40 left-0 md:left-[70rem] md:-top-[25rem]"
        fill="cyan"
      />
      
    </div>
  );
}
