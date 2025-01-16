import React from "react";
import { Logo } from "../../elements/Logo";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-950">
      <div class="flex flex-col items-center mx-auto max-w-[52.5rem] px-6 lg:max-w-[78rem] *:w-full *:flex *:flex-col *:items-center">
        <div class="gap-6 py-12 border-b border-solid border-b-gray-200 dark:border-b-gray-800 lg:flex-row">
          <div class="flex flex-col items-center gap-2 lg:flex-row *:flex *:items-center *:gap-x-1.5 *:px-2 *:py-1.5 *:text-sm *:text-gray-950 dark:*:text-gray-50 *:font-medium">
            <a href="#">
              Features
              <span class="bg-blue-50 dark:bg-blue-900 flex px-1.5 py-0.5 rounded-full text-xs text-blue-600 dark:text-white font-medium">
                NEW
              </span>
            </a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
          <div class="flex items-center gap-x-1 lg:w-full lg:justify-end lg:gap-x-6 text-4xl">
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
        <div class="gap-y-6 py-8 lg:flex-row lg:justify-between *:text-sm *:text-gray-500">
          <p>&copy; Uisual Studio</p>
          <div class="flex items-center gap-x-6 hover:*:text-gray-950 dark:hover:*:text-gray-50 *:transition *:duration-[250ms] *:ease-in-out">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
