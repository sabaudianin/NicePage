import React from "react";
import { SiCodersrank } from "react-icons/si";
import { IoIosLogIn } from "react-icons/io";
import { ThemeToggle } from "./ThemeToggle";
import { MenuHamburger } from "./MenuHamburger";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 dark:bg-gray-800 dark:text-white shadow-light dark:shadow-dark">
      <div className="flex items-center ">
        <SiCodersrank className="text-2xl" />
        <p className="font-rubik mx-1">CodingBros</p>
      </div>

      <div className="hidden md:flex gap-4">
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
        <a href="#link4">Link 4</a>
      </div>
      <div className="md:hidden">
        <MenuHamburger />
      </div>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <IoIosLogIn />
      </div>
    </nav>
  );
};
