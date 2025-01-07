import React from "react";

export const Cta = () => {
  return (
    <section className="bg-[url('/images/bgCta.jpg')] bg-cover bg-center text-white">
      <main className="flex flex-col justify-between items-center lg:w-1/2 font-poppins ">
        <div className="mt-10 p-6 lg:p-10 font-extrabold ">
          <h2 className="text-3xl  ">
            Be part of the top Web Development Convention in Poland.
          </h2>
          <h3 className="text-lg p-10">
            Join Poland's premier event for web developers!
          </h3>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Buy Ticket now
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Become a Sponsor
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Join as a Speaker
          </button>
        </div>
        <div className="text-center  p-6 rounded-lg shadow-lg">
          <p className="text-md">
            Don't miss the biggest Web Development Conference in Poland!
          </p>
          <p className="text-sm mt-2">August 1-2, 2025 | Warsaw, Poland</p>
        </div>
      </main>
    </section>
  );
};
