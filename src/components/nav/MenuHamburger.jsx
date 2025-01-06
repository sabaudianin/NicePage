import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <GiHamburgerMenu />
      </button>
      {isVisible && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-md rounded p-4 flex flex-col gap-2">
          <a
            href="#link1"
            className="hover:text-blue-500"
          >
            Link 1
          </a>
          <a
            href="#link2"
            className="hover:text-blue-500"
          >
            Link 2
          </a>
          <a
            href="#link3"
            className="hover:text-blue-500"
          >
            Link 3
          </a>
          <a
            href="#link4"
            className="hover:text-blue-500"
          >
            Link 4
          </a>
          <a
            href="#link5"
            className="hover:text-blue-500"
          >
            Link 5
          </a>
        </div>
      )}
    </div>
  );
};
