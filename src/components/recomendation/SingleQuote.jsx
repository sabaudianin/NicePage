import { FaCircle } from "react-icons/fa";

export const SingleQuote = ({ quote, imgSrc, name, title }) => {
  return (
    <figure className="mt-10">
      <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-10">
        <img
          alt={name}
          src={imgSrc}
          className="mx-auto size-10 rounded-full"
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">{name}</div>
          <FaCircle
            size={10}
            className="text-black"
          />
          <div className="text-gray-600">{title}</div>
        </div>
      </figcaption>
    </figure>
  );
};
