import {
  FaJsSquare,
  FaSass,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiWebpack,
  SiVite,
  SiRedux,
  SiWebstorm,
  SiVitest,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

export const Technology = () => {
  return (
    <section className="bg-indigo-100 dark:bg-neutral-900">
      <h2 className="font-rubik text-black text-5xl text-center text-pink-500">
        Technology:
      </h2>
      <div className="relative w-full overflow-hidden py-20 text-6xl">
        <div className="absolute top-10 flex gap-12 whitespace-nowrap animate-iconCarusel flex items-center justify-between">
          <div>
            <FaJsSquare className="text-yellow-300 bg-black p-1/2 rounded" />
          </div>
          <div>
            <FaHtml5 className="text-white bg-orange-500 p-1/2 rounded" />
          </div>
          <div>
            <FaReact className="text-sky-400 font-bold p-1/2" />
          </div>
          <div>
            <FaCss3 className="text-white bg-blue-500 p-1/2 rounded" />
          </div>
          <div>
            <FaGithub className="text-black p-1/2" />
          </div>
          <div>
            <RiTailwindCssFill className="text-sky-600 p-1/2 rounded" />
          </div>
          <div>
            <FaNodeJs className="text-green-500  p-1/2 rounded" />
          </div>
          <div>
            <FaSass className="text-pink-400 bg-black-300 p-4 text-8xl" />
          </div>
          <div>
            <BiLogoVisualStudio className="text-blue-600 p-4 text-8xl" />
          </div>
          <div>
            <SiRedux className="text-red-600 p-4 text-7xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
