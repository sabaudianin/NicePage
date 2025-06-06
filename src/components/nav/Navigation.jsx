import React from "react";

import { ThemeToggle } from "../../theme/ThemeToggle";
import { MenuHamburger } from "./MenuHamburger";

import { NavLinks } from "./NavLinks";
import { Logo } from "../../elements/Logo";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-50 dark:bg-gray-800 dark:text-white shadow-light dark:shadow-dark sticky top-0 z-50 ">
      <Logo />
      <div className="flex items-center gap-1">
        <ThemeToggle />
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
