import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Cta } from "../cta/Cta";
import { AboutUs } from "../aboutUs/AboutUs";
import { NewsLetter } from "../newsletter/NewsLetter";
import { TechnologyMarquee } from "../technology/TechnologyMarquee";
import { TechCards } from "../technology/TechCards";
import { Speakers } from "../speakers/Speakers.jsx";
import { Sponsors } from "../sponsors/Sponsors.jsx";
import { Recomendation } from "../recomendation/Recomendation.jsx";
import { Summary } from "../summary/Summary.jsx";

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
        <section className="my-10">
          <AboutUs />
        </section>
        <section id="section4">
          <NewsLetter />
        </section>
        <section
          id="section1"
          className="bg-[url('/images/code.jpg')] bg-fixed bg-cover"
        >
          <TechnologyMarquee />
          <TechCards />
        </section>

        <section
          id="section2"
          // className="bg-[url('/images/bgCta.jpg')] bg-cover bg-center "
        >
          <Speakers />
        </section>
        <section
          id="section3"
          // className="bg-[url('/images/bgCta.jpg')] bg-cover"
        >
          <Sponsors />
        </section>

        <section
          id="section4"
          className=""
        >
          <Recomendation />
        </section>
        <section>
          <Summary />
        </section>
      </main>
    </>
  );
};
