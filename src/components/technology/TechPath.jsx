import { GiOnTarget } from "react-icons/gi";
import { TopicCard } from "./TopicCard";

export const TechPath = () => {
  return (
    <section className="p-4 font-sans">
      <article className="mb-12 ">
        <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-purple-500 text-center text-shadow dark:text-shadow-dark ">
          <div className="flex justify-center items-center text-error gap-2">
            <GiOnTarget />
            <GiOnTarget />
            <div className="rotate-y-180">
              <GiOnTarget />
            </div>
            <div>
              <GiOnTarget className="rotate-y-180" />
            </div>
          </div>
          Tracks & Focus Areas
        </h2>
        <p className="text-lg  font-semibold text-center">
          Discover the technologies, tools, and trends shaping the future of
          development.
        </p>
      </article>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <TopicCard
          title="Frontend & Design Excellence"
          description="Technologies and tools for building interactive and visually
            stunning applications. Explore best practices and the latest trends
            in frontend development."
          topics={[
            "Creating accessible and responsive interfaces with HTML5 and CSS3.",
            "Building dynamic applications with React and Redux.",
            "Modern CSS frameworks like TailwindCSS to streamline development.",
            "Crafting maintainable and efficient styles with Sass.",
          ]}
          bgColor="bg-indigo-300"
        />
        <TopicCard
          title=" Backend & Node.js Ecosystem"
          description="Server-side solutions and scalability. Dive into the world of
            backend technologies where Node.js powers fast and scalable
            application logic. Learn how tools like Vite and Vitest improve the
            quality and performance of your code."
          topics={[
            "Building scalable APIs with Node.js.",
            "Automating and testing workflows using Vitest.",
            "Server optimization using cutting-edge tools.",
          ]}
          bgColor="bg-orange-300"
        />
        <TopicCard
          title="DevTools Mastery"
          description="Tools that enhance development speed and efficiency. Discover the latest tools that make developers lives easier. Technologies like GitHub, WebStorm, Visual Studio, and Webpack form the foundation of modern development workflows."
          topics={[
            "Efficient project management with GitHub.",
            "Debugging and writing clean code using WebStorm and Visual Studio.",
            "Application optimization with Webpack.",
          ]}
          bgColor="bg-green-300"
        />

        <TopicCard
          title="Modern Workflow"
          description="Developing applications with future-proof tools. Learn how modern tools like Vite are reshaping the way applications are built. Speed, efficiency, and simplicity define today's development workflows."
          topics={[
            "Accelerating development workflows with Vite.",
            "Managing complex projects with Redux.",
            "Integrating frontend and backend tools for cohesive applications.",
          ]}
          bgColor="bg-pink-300"
        />

        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <TopicCard
            title="Future-ready Frontend"
            description="Transforming frontend development with next-gen technologies. Enhance your skills and explore how to build future-proof applications using React, TailwindCSS, Vite, and Vitest."
            topics={[
              "Does React still reign supreme? New updates in the ecosystem.",
              "Styling the future with TailwindCSS and Sass.",
              "Building high-performance applications with Vite.",
            ]}
            bgColor="bg-sky-300"
          />
        </div>
      </div>
    </section>
  );
};
