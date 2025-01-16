import { IoCheckmarkCircleSharp } from "react-icons/io5";

export const PricingPlan = ({
  name,
  price,
  period,
  description,
  features,
  buttonColor,
  textColor,
  buttonText,
  badge,
  badgeColor,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className={`text-lg font-bold ${textColor}`}>{name}</p>
          {badge && (
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>

        <p className="text-3xl font-bold text-gray-900 dark:text-gray-50 lg:text-4xl">
          {price}
          <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
            {" "}
            {period}
          </span>
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>

      <a
        href="#"
        className={`w-full px-5 py-3 rounded-lg text-white text-base text-center font-medium transition duration-250 ease-in-out ${buttonColor}`}
      >
        {buttonText}
      </a>

      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <IoCheckmarkCircleSharp className="text-blue-600 text-xl" />
            <p className="text-base text-gray-900 dark:text-gray-50">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
