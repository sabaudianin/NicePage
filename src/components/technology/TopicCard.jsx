import { FcOk } from "react-icons/fc";

export const TopicCard = ({ title, description, topics, bgColor }) => {
  return (
    <section
      className={`p-8 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300 ${bgColor} text-gray-700`}
    >
      <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-shadow-fff mb-3 text-center">
        {title}
      </h3>

      <hr className="mx-auto w-3/4 border-2 my-2 border-darkBackground" />

      <p className="font-medium mb-4  first-letter:text-3xl first-line:text-2xl">
        {description}
      </p>

      <ul className="space-y-1">
        {topics.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1 hover:font-semibold transition-transform duration-300"
          >
            <FcOk className="text-2xl" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
