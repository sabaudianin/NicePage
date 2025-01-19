import React from "react";

export const SpeakerForm = () => {
  return (
    <section className="flex justify-center items-center py-2 lg:py-12">
      <div className="w-full lg:px-8 ">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-3xl lg:text-6xl font-bold m-4 text-orange-500">
            Get Your Ticket
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl lg:text-2xl lg:py-16">
            Be Lecturer.
          </p>
        </div>
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-50"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-2 text-base rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:outline-none border border-gray-200 dark:border-gray-600"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-50"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-4 py-2 text-base rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:outline-none border border-gray-200 dark:border-gray-600"
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className="mb-6">
            DIV6{" "}
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-50"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              className="block w-full px-4 py-2 text-base rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:outline-none border border-gray-200 dark:border-gray-600"
              placeholder="Any special requests or additional details..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-50"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              className="block w-full px-4 py-2 text-base rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:outline-none border border-gray-200 dark:border-gray-600"
              placeholder="Any special requests or additional details..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-lg font-bold transition-colors duration-300"
            >
              Be Speaker
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
