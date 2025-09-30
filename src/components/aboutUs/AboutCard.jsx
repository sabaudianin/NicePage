import React from "react";
import { FaPlus } from "react-icons/fa6";

export const AboutCard = ({
  number,
  label,
  icon: Icon,
  borderColor,
  iconColor,
}) => {
  return (
    <article className="text-3xl text-center font-medium">
      <div
        className={`w-full h-full rounded border-b-8 px-4 ${borderColor} z-0 flex items-center justify-between gap-3`}
      >
        <div className="inline-flex items-center gap-1 ">
          <b className="font-bold">{number}</b>
          <FaPlus className="w-[1em] h-[1em] translate-y-[3px]" />
          <span className="font-medium">{label}</span>
        </div>

        <Icon className={`${iconColor} text-3xl`} />
      </div>
    </article>
  );
};
