import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const PricingPlan = ({
  name,
  price,
  description,
  features,
  buttonColor,
  textColor,
  buttonText,
  badge,
  badgeColor,
  planOption,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-slate-50 dark:bg-gray-800 shadow-lg rounded-xl p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className={`text-xl font-bold ${textColor}`}>{name}</p>
          {badge && (
            <span
              className={`px-4 py-2 text-sm font-medium rounded-xl ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>

        <p className="text-3xl font-bold text-gray-900 dark:text-gray-50 lg:text-4xl">
          {price}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>

      <NavLink
        to="/buy-ticket"
        state={{ plan: planOption }}
        className={` btn w-full px-5 py-3 rounded-lg text-white text-base text-center font-medium transition duration-250 ease-in-out ${buttonColor}`}
      >
        {buttonText}
      </NavLink>

      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <IoCheckmarkCircleSharp className="text-green-600 text-xl" />
            <p className="text-base text-gray-900 dark:text-gray-50">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
