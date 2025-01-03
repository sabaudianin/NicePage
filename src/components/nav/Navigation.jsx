import React from "react";
import { SiCodersrank } from "react-icons/si";
import { IoIosLogIn } from "react-icons/io";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center ">
        <h2>CodingBros</h2>
        <SiCodersrank className="text-2xl" />
      </div>

      <div className="flex gap-1">
        <p>link1</p>
        <p>link2</p>
        <p>link3</p>
      </div>
      <div className="flex gap-1">
        <IoIosLogIn />
        <ThemeToggle />
      </div>
    </div>
  );
};
