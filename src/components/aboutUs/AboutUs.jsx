import { MdEmojiEvents } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { BsAward } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { AiFillTrophy } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

<LiaChalkboardTeacherSolid />;

export const AboutUs = () => {
  return (
    <section className="my-6 px-4">
      <h2
        className="text-5xl font-bold mb-8 text-center"
        style={{ textShadow: "2px 2px 2px #FFA500" }}
      >
        About <span className="font-rubik">CodingBros</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <article className="text-4xl text-center font-medium">
          <p className="mb-2">
            <b>3rd</b> Edition
          </p>
          <GiPartyPopper className="text-orange-500 text-4xl mx-auto" />
        </article>

        {/* 200 Speakers */}
        <article className="text-2xl text-center font-medium">
          <p className="mb-2">
            <b>200</b> Speakers
          </p>
          <LiaChalkboardTeacherSolid className="text-pink-500 text-4xl mx-auto" />
        </article>

        {/* 3000 Attendees */}
        <article className="text-2xl text-center font-medium">
          <p className="mb-2">
            <b>3000</b> Attendees
          </p>
          <IoPeopleSharp className="text-green-500 text-4xl mx-auto" />
        </article>

        {/* 120 Partners */}
        <article className="text-2xl text-center font-medium">
          <p className="mb-2">
            <b>120</b> Partners
          </p>
          <IoPeopleSharp className="text-green-500 text-4xl mx-auto" />
        </article>

        {/* 50 Workshops (dodatkowa statystyka) */}
        <article className="text-2xl text-center font-medium">
          <p className="mb-2">
            <b>50</b> Workshops
          </p>
          <GiPartyPopper className="text-yellow-500 text-4xl mx-auto" />
        </article>

        {/* 800 Members (dodatkowa statystyka) */}
        <article className="text-2xl text-center font-medium">
          <p className="mb-2">
            <b>800</b> Members
          </p>
          <IoPeopleSharp className="text-blue-500 text-4xl mx-auto" />
        </article>
      </div>
    </section>
  );
};
