import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiRedux } from "react-icons/si";

export const Technology = () => {
  return (
    <section className="bg-indigo-100 dark:bg-neutral-900">
      <div className="relative w-full overflow-hidden py-20 text-8xl">
        <h2 className="font-rubik text-black text-5xl text-center text-pink-500">
          Technology:
        </h2>
        <div className="absolute top-14 flex gap-12 whitespace-nowrap animate-iconCarusel">
          <div>
            <FaJsSquare className="text-yellow-200 bg-black p-4" />
          </div>
          <div>
            <FaHtml5 className="text-white bg-orange-400 p-4" />
          </div>
          <div>
            <FaReact className="text-sky-400 bg-black p-4" />
          </div>
          <div>
            <FaCss3 className="text-white bg-blue-500 p-4" />
          </div>
          <div>
            <FaGithub className="text-black bg-white p-4" />
          </div>
          <div>
            <RiTailwindCssFill className="text-sky-600 bg-zinc-700 p-4" />
          </div>
          <div>
            <SiVite className="text-purple-600 bg-black p-4" />
          </div>
          <div>
            <FaNodeJs className="text-green-400 bg-white p-4" />
          </div>
          <div>
            <BiLogoVisualStudio className="text-blue-600 bg-black p-4" />
          </div>
          <div>
            <SiWebpack className="text-blue-400 bg-white p-4" />
          </div>
          <div>
            <SiRedux className="text-red-600 bg-black p-4" />
          </div>
          <div>
            <FaJsSquare className="text-yellow-200 bg-black p-4" />
          </div>
          <div>
            <FaHtml5 className="text-white bg-orange-400 p-4" />
          </div>
          <div>
            <FaReact className="text-sky-400 bg-black p-4" />
          </div>
          <div>
            <FaCss3 className="text-white bg-blue-500 p-4" />
          </div>
          <div>
            <FaGithub className="text-black bg-white p-4" />
          </div>
          <div>
            <RiTailwindCssFill className="text-sky-600 bg-zinc-700 p-4" />
          </div>
          <div>
            <SiVite className="text-purple-600 bg-black p-4" />
          </div>
          <div>
            <FaNodeJs className="text-green-400 bg-white p-4" />
          </div>
          <div>
            <BiLogoVisualStudio className="text-blue-600 bg-black p-4" />
          </div>
          <div>
            <SiWebpack className="text-blue-400 bg-white p-4" />
          </div>
          <div>
            <SiRedux className="text-red-600 bg-black p-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
