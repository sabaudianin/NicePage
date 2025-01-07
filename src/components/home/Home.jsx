import React from "react";
import { Cta } from "../cta/Cta";

export const Home = () => {
  return (
    <>
      <Cta />
      <main>
        <section
          id="section1"
          className="h-screen bg-gray-200"
        >
          <h1>Section 1</h1>
        </section>
        <section
          id="section2"
          className="h-screen bg-gray-300"
        >
          <h1>Section 2</h1>
        </section>
        <section
          id="section3"
          className="h-screen bg-gray-400"
        >
          <h1>Section 3</h1>
        </section>
        <section
          id="section4"
          className="h-screen bg-gray-500"
        >
          <h1>Section 4</h1>
        </section>
      </main>
    </>
  );
};
