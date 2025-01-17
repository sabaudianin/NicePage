import React from "react";
import { Logo } from "../../elements/Logo";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-800 shadow-light dark:shadow-dark">
      <div className="flex flex-col items-center mx-auto px-6 w-full">
        <div className="flex flex-col items-center gap-6 py-12 border-b border-gray-200 dark:border-gray-800 lg:flex-row lg:justify-between lg:w-full">
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-x-4">
            <Logo />
            <nav className="flex items-center gap-4 text-sm text-gray-950 dark:text-gray-50 font-medium">
              <a
                href="#"
                className="hover:underline"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:underline"
              >
                NewsLetter
              </a>
              <NavLink
                to="/tickets"
                className="hover:underline"
              >
                Tickets
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-x-4 text-4xl">
            <a
              href="https://github.com/sabaudianin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rafal-bobko-569388234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-6 py-8 lg:flex-row lg:justify-between lg:w-full">
          <p className="text-sm text-gray-500">Images by Pixabay</p>
          <div className="flex items-center gap-x-6 text-sm text-gray-500 hover:text-gray-950 dark:hover:text-gray-50 transition duration-250 ease-in-out">
            <NavLink
              href="#"
              className="hover:underline"
            >
              Privacy
            </NavLink>
            <a
              href="#"
              className="hover:underline"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:underline"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
