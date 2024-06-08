import React from "react";
 
export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full bg-black bg-grid-white/[0.1] absolute inset-0 flex items-center justify-center -z-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}