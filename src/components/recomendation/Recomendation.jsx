import { Logo } from "../../elements/Logo";
import { SingleQuote } from "./SingleQuote";

export const Recomendation = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,pink,white)] opacity-50" />

      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left -skew-x-[30deg] bg-purple-100 shadow-xl shadow-pink-500 ring-1 ring-purple-500 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <SingleQuote
          quote="At Coding Bros Conference, our mission is to bring together passionate developers, innovators, and thought leaders in the tech industry. Each year, we strive to create an environment where knowledge flows freely, connections are forged, and innovation is inspired."
          imgSrc="/images/bw.jpg"
          name="Bob Rafalsky"
          title="CEO of CodingBros"
        />

        <SingleQuote
          quote="Seeing our attendees leave with fresh ideas and new collaborations is what drives us forward. I am proud to be part of a community that continually raises the bar in web development, coding, and beyond."
          imgSrc="/images/photo.jpg"
          name="Rafal Bobko"
          title="JS & React Developer"
        />
      </div>
    </section>
  );
};
