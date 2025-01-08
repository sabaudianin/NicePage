import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { NavLinks } from "./NavLinks";

export const MenuHamburger = () => {
  const [isVisible, setIsVisible] = useState("false");
  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsVisible(false);
  }, [location]); //zamkniecie po zmianie trasy

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="text-2xl p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        {isVisible ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      {isVisible && (
        <div
          ref={menuRef}
          className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-md rounded p-4 m-2 flex flex-col gap-2"
        >
          <NavLinks className="flex flex-col gap-2" />
        </div>
      )}
    </div>
  );
};
