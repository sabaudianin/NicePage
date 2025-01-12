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
      number: "3rd",
      label: "Edition",
      icon: LiaBirthdayCakeSolid,
      borderColor: "border-orange-500",
      iconColor: "text-orange-600",
    },
    {
      number: "200",
      label: "Speakers",
      icon: LiaChalkboardTeacherSolid,
      borderColor: "border-orange-200",
      iconColor: "text-orange-200",
    },
    {
      number: "3000",
      label: "Attendees",
      icon: IoPeopleSharp,
      borderColor: "border-green-200",
      iconColor: "text-green-200",
    },
    {
      number: "120",
      label: "Partners",
      icon: FaRegHandshake,
      borderColor: "border-green-500",
      iconColor: "text-green-500",
    },
    {
      number: "10",
      label: "Workshops",
      icon: GrWorkshop,
      borderColor: "border-pink-200",
      iconColor: "text-pink-200",
    },
    {
      number: "800",
      label: "Members",
      icon: HiOutlineUsers,
      borderColor: "border-pink-500",
      iconColor: "text-pink-500",
    },
  ];

  return (
    <section className="flex justify-center items-center flex-col text-shadow-lg dark:text-shadow-fff">
      <h2 className="text-5xl font-bold mb-8 text-center">
        Convent <span className="font-rubik text-center">CodingBros</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
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
