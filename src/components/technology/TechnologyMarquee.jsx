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

export const TechnologyMarquee = () => {
  return (
    <section className="bg-indigo-100 dark:bg-neutral-900 my-10">
      <h2 className="font-rubik text-black text-5xl text-center text-pink-500">
        Technology:
      </h2>
      <div className="relative w-full overflow-hidden py-20 text-6xl">
        <div className="absolute top-5 flex gap-x-12 whitespace-nowrap animate-iconCarusel flex items-center justify-between">
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
            <FaGithub className="text-black dark:text-white p-1/2" />
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
          <div>
            <SiWebpack className="text-blue-400 p-4 text-8xl" />
          </div>
          <div>
            <SiVite className="text-yellow-400 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded p-1/2" />
          </div>
          <div>
            <SiVitest className="text-yellow-400 border-b p-1/2 border-b-4 border-green-500" />
          </div>
          <div>
            <SiWebstorm className="text-white bg-black p-1/2 rounded" />
          </div>
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
            <FaGithub className="text-black dark:text-white p-1/2" />
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
          <div>
            <SiWebpack className="text-blue-400 p-4 text-8xl" />
          </div>
          <div>
            <SiVite className="text-yellow-400 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded p-1/2" />
          </div>
          <div>
            <SiVitest className="text-yellow-400 border-b p-1/2 border-b-4 border-green-500" />
          </div>
          <div>
            <SiWebstorm className="text-white bg-black p-1/2 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};
