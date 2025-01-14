import { SpeakerCard } from "./SpeakerCard";
import { speakers } from "../../constants.js";
import { DecorLine } from "../../elements/Decorline.jsx";
import { JoinAsASpeaker } from "../../elements/JoinAsASpeaker.jsx";

export const Speakers = () => {
  return (
    <section className="px-2">
      <h2 className="text-3xl xl:text-4xl font-bold text-center text-shadow dark:text-shadow-dark text-pink-500 py-4">
        Meet Our Lecturers :
      </h2>
      <DecorLine />

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
    </section>
  );
};
