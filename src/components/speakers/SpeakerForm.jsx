import { FiChevronDown } from "react-icons/fi";

export const SpeakerForm = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto px-6 py-32 gap-y-16 w-full max-w-screen-lg lg:max-w-screen-xl">
        {/* Nagłówek i opis */}
        <div className="mx-auto w-full max-w-screen-md text-center text-gray-950 dark:text-gray-50">
          <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
            Become a Speaker/Lecturer
          </h2>
          <p className="text-base">
            Share your expertise and inspire others by becoming a speaker or
            lecturer at our event. Fill out the form below and we'll review your
            proposal.
          </p>
        </div>

        {/* Formularz */}
        <form
          action="#"
          className="w-full bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 rounded-lg p-6 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-4 md:max-w-2xl md:p-12"
        >
          {/* Full Name */}
          <div className="col-span-full sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-950 dark:text-gray-50"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 
                           ring-1 ring-inset ring-gray-200 dark:ring-gray-800 
                           hover:ring-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 
                           transition ease-in-out duration-200"
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="col-span-full sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-950 dark:text-gray-50"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 
                           ring-1 ring-inset ring-gray-200 dark:ring-gray-800 
                           hover:ring-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 
                           transition ease-in-out duration-200"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Subject / Topic */}
          <div className="col-span-full">
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-950 dark:text-gray-50"
            >
              Topic / Subject
            </label>
            <div className="relative bg-white dark:bg-gray-950 rounded-lg mt-2">
              <select
                id="topic"
                name="topic"
                className="appearance-none relative block w-full bg-transparent z-10 rounded-lg border-0 px-4 py-2 text-base text-gray-950 dark:text-gray-50 
                           ring-1 ring-inset ring-gray-200 dark:ring-gray-800 
                           hover:ring-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-inset focus:ring-gray-500 
                           transition ease-in-out duration-200"
                required
              >
                <option
                  value=""
                  disabled
                  hidden
                >
                  Select Topic
                </option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend & Cloud</option>
                <option value="softskills">Soft Skills & Leadership</option>
                <option value="other">Other</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute top-3 right-4 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          {/* Message / Description */}
          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-950 dark:text-gray-50"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                className="block w-full bg-white dark:bg-gray-950 rounded-lg border-0 px-4 py-2.5 text-base text-gray-950 dark:text-gray-50 
                           ring-1 ring-inset ring-gray-200 dark:ring-gray-800 
                           hover:ring-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-inset focus:ring-gray-500 placeholder:text-gray-500 
                           transition ease-in-out duration-200"
                placeholder="Tell us about your talk or session..."
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-full mt-1 bg-blue-600 hover:bg-blue-700 
                       rounded-lg border-0 px-4 py-2 text-base font-medium text-white 
                       transition ease-in-out duration-200"
          >
            Become Speaker
          </button>
        </form>

        {/* Informacja dodatkowa */}
        <p className="mx-auto md:max-w-2xl text-sm text-center text-gray-500">
          We&rsquo;ll get back to you as soon as we can with next steps on how
          to join our speaker lineup.
        </p>
      </div>
    </section>
  );
};
