import { FcOk } from "react-icons/fc";

export const TopicCard = ({ title, description, topics, bgColor }) => {
  return (
    <article
      className={`p-4 mb-10 rounded-xl hover:scale-102 hover:shadow-lg transition-transform duration-300 ${bgColor}`}
    >
      <h3 className="text-2xl font-semibold text-shadow mb-3 text-center">
        {title}
      </h3>

      <hr className="mx-auto w-16 border-2 border-gray-600 my-2" />

      <p className="text-gray-700 font-medium mb-4">{description}</p>

      <ul className="space-y-1">
        {topics.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 flex items-center gap-1"
          >
            <FcOk className="text-2xl" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
