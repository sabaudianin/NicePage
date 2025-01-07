import React from "react";
import { SiCodersrank } from "react-icons/si";
import { IoIosLogIn } from "react-icons/io";
import { ThemeToggle } from "./ThemeToggle";
import { MenuHamburger } from "./MenuHamburger";
import { NavLinks } from "./NavLinks";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 dark:bg-gray-800 dark:text-white shadow-light dark:shadow-dark">
      <div className="flex items-center ">
        <SiCodersrank className="text-2xl" />
        <p className="font-rubik mx-1">CodingBros</p>
      </div>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <IoIosLogIn />
      </div>

      <div className="hidden md:flex gap-4">
        <NavLinks className="flex flex-row gap-4" />
      </div>
      <div className="md:hidden">
        <MenuHamburger />
      </div>
    </nav>
  );
};
