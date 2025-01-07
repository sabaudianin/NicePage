import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLinks } from "./NavLinks";

export const MenuHamburger = () => {
  const [isVisible, setIsVisible] = useState("false");
  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="text-2xl p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        {isVisible ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      {isVisible && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-md rounded p-4 flex flex-col gap-2">
          <NavLinks className="flex flex-col gap-2" />
        </div>
      )}
    </div>
  );
};
