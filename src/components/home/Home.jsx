import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Cta } from "../cta/Cta";
import { BuyTicketButton } from "../../elements/BuyTicketButton";
import { AboutUs } from "../aboutUs/AboutUs";
import { NewsLetter } from "../newsletter/NewsLetter";
import { TechnologyMarquee } from "../technology/TechnologyMarquee";
import { TechCards } from "../technology/TechCards";
import { Speakers } from "../speakers/Speakers.jsx";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.target) {
      scroller.scrollTo(location.state.target, { smooth: true, duration: 500 });
    }
  }, [location]);

  return (
    <>
      <main className="bg-indigo-100 dark:bg-neutral-900 text-center">
        <section>
          <Cta />
        </section>
        <section
          className="my-10"
          id="section1"
        >
          <AboutUs />
        </section>
        <NewsLetter />
        <section className="">
          <TechnologyMarquee />
          <TechCards />
        </section>

        <section
          id="section2"
          className="bg-indigo-100 dark:bg-neutral-900 py-4"
        >
          <Speakers />
        </section>
        <section
          id="section3"
          className=" h-screen flex flex-col justify-around items-center "
        >
          <BuyTicketButton />
        </section>
        <section
          id="section4"
          className="h-screen bg-gray-500"
        >
          <section
            id="section1"
            className="h-screen flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-10 p-10 bg-indigo-900 dark:bg-neutral-900"
          >
            {/* Pierwszy okrąg - obrazek */}
            <div className="flex items-center justify-center bg-[url('/images/bgCta.jpg')] bg-cover bg-center rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Join the ultimate developer event
              </p>
            </div>

            {/* Drugi okrąg - obrazek */}
            <div className="flex items-center justify-center bg-[url('/images/chair.jpg')] bg-cover bg-center rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Learn from top industry experts
              </p>
            </div>

            {/* Trzeci okrąg - kolor */}
            <div className="flex items-center justify-center bg-orange-400 rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Networking opportunities await
              </p>
            </div>

            {/* Czwarty okrąg - kolor */}
            <div className="flex items-center justify-center bg-purple-400 rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Explore the future of web development
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
