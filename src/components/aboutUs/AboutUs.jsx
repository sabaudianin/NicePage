import { GiPartyPopper } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaRegHandshake } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { AboutCard } from "./AboutCard";

export const AboutUs = () => {
  const stats = [
    {
      number: "200",
      label: "Speakers",
      icon: LiaChalkboardTeacherSolid,
      borderColor: "border-pink-500",
      iconColor: "text-pink-500",
    },
    {
      number: "3000",
      label: "Attendees",
      icon: IoPeopleSharp,
      borderColor: "border-green-500",
      iconColor: "text-green-500",
    },
    {
      number: "120",
      label: "Partners",
      icon: FaRegHandshake,
      borderColor: "border-red-500",
      iconColor: "text-red-500",
    },
    {
      number: "50",
      label: "Workshops",
      icon: GrWorkshop,
      borderColor: "border-yellow-500",
      iconColor: "text-yellow-500",
    },
    {
      number: "800",
      label: "Members",
      icon: HiOutlineUsers,
      borderColor: "border-blue-500",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section
      className="my-6 px-4"
      style={{ textShadow: "2px 2px 2px #fff" }}
    >
      <h2 className="text-5xl font-bold mb-8 text-center">
        Convent <span className="font-rubik">CodingBros</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <article className="text-4xl text-center font-medium">
          <div className="w-full h-full rounded border-b-8 px-4 border-orange-500 z-0 flex items-center justify-center gap-2">
            <span className="mb-0 flex items-center">
              <b>3rd </b> &nbsp; Edition
            </span>
            <LiaBirthdayCakeSolid className="text-orange-500 text-4xl inline" />
          </div>
        </article>

        {stats.map((stat, index) => (
          <AboutCard
            key={index}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
            borderColor={stat.borderColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
    </section>
  );
};
