import { SpeakerCard } from "./SpeakerCard";
import { speakers } from "../../constants.js";

export const Speakers = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl xl:text-4xl font-bold text-center text-shadow dark:text-shadow-dark text-pink-500">
          Meet Our Speakers :
        </h2>

        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            about={speaker.about}
            img={speaker.img}
          />
        ))}
      </div>
    </section>
  );
};
