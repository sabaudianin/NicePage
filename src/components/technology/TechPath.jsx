export const TechPath = () => {
  return (
    <section className="p-4 text-gray-700 font-sans">
      <article className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Tracks & Focus Areas</h2>
        <span className="text-lg text-gray-700">
          Discover the technologies, tools, and trends shaping the future of
          development. Join us to explore cutting-edge innovations and practical
          insights from industry leaders.
        </span>
      </article>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="p-4 mb-10 bg-blue-100 rounded">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">
            Frontend & Design Excellence
          </h3>
          <p className="text-gray-700 mb-4">
            Technologies and tools for building interactive and visually
            stunning applications. Explore best practices and the latest trends
            in frontend development. From HTML5, CSS3, JavaScript, to React,
            TailwindCSS, and Sass, these tools define the modern user
            experience.
          </p>
          <h4 className="text-xl font-medium text-green-600 mb-2">Topics:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-gray-700">
              Creating accessible and responsive interfaces with HTML5 and CSS3.
            </li>
            <li className="text-gray-700">
              Building dynamic applications with React and Redux.
            </li>
            <li className="text-gray-700">
              Modern CSS frameworks like TailwindCSS to streamline development.
            </li>
            <li className="text-gray-700">
              Crafting maintainable and efficient styles with Sass.
            </li>
          </ul>
        </article>

        <article className="p-4 mb-10 bg-purple-100 rounded">
          <h3 className="text-2xl font-semibold text-purple-600 mb-3">
            Backend & Node.js Ecosystem
          </h3>
          <p className="text-gray-700 mb-4">
            Server-side solutions and scalability. Dive into the world of
            backend technologies where Node.js powers fast and scalable
            application logic. Learn how tools like Vite and Vitest improve the
            quality and performance of your code.
          </p>
          <h4 className="text-xl font-medium text-green-600 mb-2">
            Sample topics:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-gray-700">
              Building scalable APIs with Node.js.
            </li>
            <li className="text-gray-700">
              Automating and testing workflows using Vitest.
            </li>
            <li className="text-gray-700">
              Server optimization using cutting-edge tools.
            </li>
          </ul>
        </article>

        <article className="p-4 mb-10 bg-pink-100 rounded">
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">
            DevTools Mastery
          </h3>
          <p className="text-gray-700 mb-4">
            Tools that enhance development speed and efficiency. Discover the
            latest tools that make developers lives easier. Technologies like
            GitHub, WebStorm, Visual Studio, and Webpack form the foundation of
            modern development workflows.
          </p>
          <h4 className="text-xl font-medium text-green-600 mb-2">
            Sample topics:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-gray-700">
              Efficient project management with GitHub.
            </li>
            <li className="text-gray-700">
              Debugging and writing clean code using WebStorm and Visual Studio.
            </li>
            <li className="text-gray-700">
              Application optimization with Webpack.
            </li>
          </ul>
        </article>

        <article className="p-4 mb-10 bg-violet-100 rounded">
          <h3 className="text-2xl font-semibold text-violet-500 mb-3">
            Modern Workflow
          </h3>
          <p className="text-gray-700 mb-4">
            Developing applications with future-proof tools. Learn how modern
            tools like Vite are reshaping the way applications are built. Speed,
            efficiency, and simplicity define todays development workflows.
          </p>
          <h4 className="text-xl font-medium text-green-600 mb-2">
            Sample topics:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-gray-700">
              Accelerating development workflows with Vite.
            </li>
            <li className="text-gray-700">
              Managing complex projects with Redux.
            </li>
            <li className="text-gray-700">
              Integrating frontend and backend tools for cohesive applications.
            </li>
          </ul>
        </article>

        <div class="col-span-1 lg:col-span-2 flex justify-center">
          <article className="p-4 mb-10 bg-orange-100 rounded lg:col-span-2 ">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">
              Future-ready Frontend
            </h3>
            <p className="text-gray-700 mb-4">
              Transforming frontend development with next-gen technologies.
              Enhance your skills and explore how to build future-proof
              applications using React, TailwindCSS, Vite, and Vitest.
            </p>
            <h4 className="text-xl font-medium text-green-600 mb-2">
              Sample topics:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-gray-700">
                Does React still reign supreme? New updates in the ecosystem.
              </li>
              <li className="text-gray-700">
                Styling the future with TailwindCSS and Sass.
              </li>
              <li className="text-gray-700">
                Building high-performance applications with Vite.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
