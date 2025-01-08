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
        className={`w-full h-full rounded border-b-8 px-4 ${borderColor} z-0 flex items-center justify-center gap-2`}
      >
        <p className="mb-2 flex items-center">
          <b>{number}</b>
          <span className="inline text-lg mr-2">
            <FaPlus />
          </span>
          {label}
        </p>
        <Icon className={`${iconColor} text-4xl mx-auto`} />
      </div>
    </article>
  );
};
