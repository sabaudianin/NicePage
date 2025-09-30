import React from "react";
import { Countdown } from "./Countdown";
import { BuyTicketButton } from "../../elements/BuyTicketButton";
import { JoinAsASpeaker } from "../../elements/JoinAsASpeaker";
import { BecomeASponsor } from "../../elements/BecomeSponsor";

export const Cta = () => {
  return (
    <section className="relative bg-[url('/images/cta.jpg')] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between text-white lg:py-20">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <main className="relative flex flex-col justify-between items-center lg:w-1/2 font-poppins z-1">
        <div className="mt-10 p-6 lg:p-10 font-extrabold">
          <p className="text-2xl lg:text-3xl font-semibold italic text-center ">
            Be part of the top Web Development Convention in
            <span className="m-2 before:absolute before:inset-0 before:skew-y-2 before:bg-pink-500 relative inline-block">
              <span className="relative text-3xl">Poland.</span>
            </span>
          </p>

          <h3 className="text-lg p-10 text-shadow-md">
            Join Poland's premier event for web developers!
          </h3>
        </div>
        <div className="flex flex-col gap-3 p-2 w-full">
          <BuyTicketButton />
          <BecomeASponsor />
          <JoinAsASpeaker />
        </div>
        <div className="text-center p-6 rounded-lg shadow-lg">
          <p className="text-md">
            Don't miss the biggest Web Development Conference in Poland!
          </p>
          <p className="text-sm mt-2">August 1-2, 2025 | Warsaw, Poland</p>
        </div>
      </main>

      <aside className=" mx-auto lg:flex justify-center items-center relative z-10">
        <div className=" shadow-lg text-center">
          <Countdown />
        </div>
      </aside>
    </section>
  );
};
