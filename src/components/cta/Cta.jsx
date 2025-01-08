import React from "react";
import { Countdown } from "./Countdown";
import { BuyTicketButton } from "../../elements/BuyTicketButton";

export const Cta = () => {
  return (
    <section className="relative bg-[url('/images/cta.jpg')] bg-cover bg-center text-white flex flex-col lg:flex-row items-center justify-between">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <main className="relative flex flex-col justify-between items-center lg:w-1/2 font-poppins z-1">
        <div className="mt-10 p-6 lg:p-10 font-extrabold">
          <h2 className="text-3xl text-shadow-lg">
            Be part of the top Web Development Convention in Poland.
          </h2>
          <h3 className="text-lg p-10 text-shadow-md">
            Join Poland's premier event for web developers!
          </h3>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <BuyTicketButton />
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Become a Sponsor
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Join as a Speaker
          </button>
        </div>
        <div className="text-center p-6 rounded-lg shadow-lg">
          <p className="text-md">
            Don't miss the biggest Web Development Conference in Poland!
          </p>
          <p className="text-sm mt-2">August 1-2, 2025 | Warsaw, Poland</p>
        </div>
      </main>

      <aside className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-10">
        <div className=" p-20 shadow-lg text-center">
          <Countdown />
        </div>
      </aside>
    </section>
  );
};
