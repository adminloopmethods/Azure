import React from "react";

function GradientDivider() {
  return (
    <div className="py-5 px-10">
      <div className="h-px w-full bg-gradient-to-r from-white via-gray-300 to-white" />
    </div>
  );
}

export default GradientDivider;
