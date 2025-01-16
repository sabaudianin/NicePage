import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { BuyTicketButton } from "../../elements/BuyTicketButton";

export const NavLinks = ({ className }) => {
  const scrollLinks = [
    { to: "section1", label: "Technology" },
    { to: "section2", label: "Lecturers" },
    { to: "section3", label: "Partnership" },
    { to: "section4", label: "NewsLetter" },
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

      <BuyTicketButton />
    </div>
  );
};
