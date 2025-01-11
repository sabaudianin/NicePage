import { FcOk } from "react-icons/fc";

export const TopicCard = ({ title, description, topics, bgColor }) => {
  return (
    <article
      className={`p-4 rounded-xl hover:scale-103 hover:shadow-lg transition-transform duration-300 ${bgColor}`}
    >
      <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-shadow mb-3 text-center text-error">
        {title}
      </h3>

      <hr className="mx-auto w-3/4 border-2 my-2 border-darkBackground" />

      <p className="text-gray-700 font-medium mb-4">{description}</p>

      <ul className="space-y-1">
        {topics.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 flex items-center gap-1 hover:font-semibold"
          >
            <FcOk className="text-2xl" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
