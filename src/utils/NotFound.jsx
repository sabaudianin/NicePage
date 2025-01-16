import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50 p-6">
      <h2 className="text-4xl lg:text-6xl font-bold text-indigo-500 mb-4">
        Oops!
      </h2>
      <p className="text-lg lg:text-2xl font-medium text-center mb-6">
        The page you're looking for doesn't exist or the URL is incorrect.
      </p>

      <p className="text-lg lg:text-2xl font-medium text-center mb-6">
        404 Error
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out text-lg font-semibold shadow-md"
      >
        <FaHome className="text-white text-xl" />
        Go to Home
      </Link>
    </section>
  );
};
