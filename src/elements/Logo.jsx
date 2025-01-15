import { Link } from "react-router-dom";
import { SiCodersrank } from "react-icons/si";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-black "
    >
      <SiCodersrank className="text-2xl" />
      <p className="font-rubik mx-1 text-xl lg:text-2xl">CodingBros</p>
    </Link>
  );
};
