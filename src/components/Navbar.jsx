/** @format */
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-around shadow-md h-[60px]">
      <h1 className="text-blue-600 font-bold text-2xl p-2">Redux app</h1>
      <div className="flex items-center space-x-6">
        <h2 className="font-semibold text-lg">Home</h2>
        <h2 className="font-semibold text-lg">About</h2>
        <h2 className="font-semibold text-lg">Contact</h2>
      </div>
      <div>
        <h3 className="p-2 font-semibold">
          Welcome <span>John</span>
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
