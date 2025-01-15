import { SpeakerCard } from "./SpeakerCard";
import { speakers } from "../../constants.js";
import { DecorLine } from "../../elements/Decorline.jsx";
import { JoinAsASpeaker } from "../../elements/JoinAsASpeaker.jsx";
import { DecorCircles } from "../../elements/DecorCircles.jsx";

export const Speakers = () => {
  return (
    <section className="p-4 lg:py-20">
      <DecorLine />
      <h2 className="text-3xl xl:text-4xl font-bold text-center text-shadow dark:text-shadow-fff">
        Meet Our Lecturers :
      </h2>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center py-4">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            about={speaker.about}
            img={speaker.img}
          />
        ))}
      </div>

      <JoinAsASpeaker />
      <DecorCircles />
    </section>
  );
};
