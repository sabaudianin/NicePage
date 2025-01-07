import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export const NavLinks = ({ className }) => {
  const scrollLinks = [
    { to: "section1", label: "Link1" },
    { to: "section2", label: "Link 2" },
    { to: "section3", label: "Link 3" },
    { to: "section4", label: "Link 4" },
  ];

  const navigate = useNavigate();
  const locattion = useLocation();

  const handleNavigate = (target) => {
    if (location.pathname === "/") {
      scroller.scrollTo(target, { smooth: true, duration: 500 });
    } else {
      navigate("/", { state: { target } });
    }
  };

  return (
    <div className={`${className}`}>
      {scrollLinks.map((link) => (
        <button
          key={link.to}
          onClick={() => handleNavigate(link.to)}
          className="cursor-pointer hover:text-red-500"
        >
          {link.label}
        </button>
      ))}
      <button
        onClick={() => navigate("/tickets")}
        className="hover:text-orange-500"
      >
        Buy tickets
      </button>
    </div>
  );
};
