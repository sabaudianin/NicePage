import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const NavLinks = ({ className }) => {
  const scrollLinks = [
    { to: "section1", label: "Link1" },
    { to: "section2", label: "Link 2" },
    { to: "section3", label: "Link 3" },
    { to: "section4", label: "Link 4" },
  ];

  return (
    <div className={`${className}`}>
      {scrollLinks.map((link) => (
        <ScrollLink
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500"
        >
          {link.label}
        </ScrollLink>
      ))}
      <RouterLink
        to="/tickets"
        className="hover:text-orange-500"
      >
        Buy tickets
      </RouterLink>
    </div>
  );
};
