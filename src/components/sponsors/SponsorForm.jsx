import React from "react";
import { FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoMegaphoneSharp } from "react-icons/io5";

export const SponsorForm = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto max-w-[52.5rem] px-6 py-32 gap-y-16 lg:max-w-[78rem]">
        <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
          <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
            Become a Sponsor
          </h2>
          <p className="text-base">
            Join our amazing community of sponsors and make our event possible.
            Whether you represent a company or sponsor as an individual,
            we&nbsp;offer a variety of perks and branding opportunities.
          </p>
        </div>

        <div className="w-full md:max-w-[36.75rem] flex flex-col gap-6">
          <form
            action="#"
            className="w-full grid grid-cols-1 gap-y-5 bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 rounded-lg p-6 sm:grid-cols-2 sm:gap-x-4 md:p-12"
          >
            <div className="col-span-full sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-950 dark:text-gray-50"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 transition ease-in-out duration-[250ms]"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-950 dark:text-gray-50"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 transition ease-in-out duration-[250ms]"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="sponsorshipType"
                className="block text-sm font-medium text-gray-950 dark:text-gray-50"
              >
                Sponsorship Type
              </label>
              <div className="relative bg-white dark:bg-gray-950 rounded-lg mt-2">
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  className="appearance-none relative block w-full bg-transparent z-10 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition ease-in-out duration-[250ms]"
                  required
                >
                  <option
                    value=""
                    disabled
                    hidden
                  >
                    Select Sponsorship
                  </option>
                  <option value="gold">Gold Sponsor</option>
                  <option value="silver">Silver Sponsor</option>
                  <option value="bronze">Bronze Sponsor</option>
                  <option value="partner">Partner</option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="absolute top-3 right-4 fill-gray-500"
                >
                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                </svg>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-950 dark:text-gray-50"
              >
                Additional Details
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2.5 text-base text-gray-950 dark:text-gray-50 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 transition ease-in-out duration-[250ms]"
                  placeholder="Tell us more about your company or vision..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="col-span-full mt-1 bg-blue-600 hover:bg-blue-700 rounded-lg border-0 px-4 py-2 text-base font-medium text-white transition ease-in-out duration-[250ms]"
            >
              <IoMegaphoneSharp className="inline-block mr-2" />
              Become Sponsor
            </button>
          </form>

          <div className="w-full flex flex-col gap-6 sm:flex-row">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 rounded-lg transition ease-in-out duration-[250ms]"
            >
              <div className="w-fit mx-auto p-2 rounded-full bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                <BiSupport className="w-6 h-6 text-blue-600 dark:text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-base font-bold text-gray-950 dark:text-gray-50 mb-1">
                  Live Support
                </p>
                <p className="text-sm text-gray-950 dark:text-gray-50 mb-1">
                  1-800-SPONSOR-HELP
                </p>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 rounded-lg transition ease-in-out duration-[250ms]"
            >
              <div className="w-fit mx-auto p-2 rounded-full bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-600 dark:text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-base font-bold text-gray-950 dark:text-gray-50 mb-1">
                  Office Address
                </p>
                <p className="text-sm text-gray-950 dark:text-gray-50 mb-1">
                  View in Google Maps
                </p>
              </div>
            </a>
          </div>
        </div>

        <p className="mx-auto max-w-[36.75rem] text-sm text-center text-gray-500">
          Our team will respond to your sponsorship request as soon as possible.
        </p>
      </div>
    </section>
  );
};
