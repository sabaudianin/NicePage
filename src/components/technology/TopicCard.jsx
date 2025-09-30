import { FcOk } from "react-icons/fc";

export const TopicCard = ({ title, description, topics, bgColor }) => {
  return (
    <section
      className={`relative p-8 rounded-xl hover:scale-103 hover:shadow-lg transition-transform duration-300 ${bgColor} text-gray-700`}
    >
      <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-shadow-fff mb-3 text-center">
        {title}
      </h3>

      <hr className="mx-auto w-3/4 border-2 my-2 border-darkBackground" />

      <p className="font-medium mb-4 first-letter:text-3xl first-line:text-2xl">
        {description}
      </p>

      <ul className="space-y-2 relative">
        <div className="absolute inset-0 z-10 w-full p-8 bg-black/10 rounded-xl pointer-events-none" />

        {topics.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-[1.25rem_1fr] items-start gap-2 hover:font-semibold transition-colors"
          >
            <FcOk className="shrink-0 w-5 h-5 mt-1" />
            <span className="md:text-xl">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
