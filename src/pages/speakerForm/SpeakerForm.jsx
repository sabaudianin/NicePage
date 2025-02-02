import React from "react";
import { IoSend } from "react-icons/io5";
import { useSpeakerForm } from "../../hooks/useSpeakerForm";

export const SpeakerForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    error,
    exist,
    added,
  } = useSpeakerForm();

  return (
    <section className="flex justify-center items-center py-2 lg:py-12">
      <div className="w-full lg:px-8 ">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-3xl lg:text-6xl font-bold m-4 text-orange-500">
            Join us as a Lecturer.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl lg:text-2xl lg:py-16">
            Share your expertise and inspire our audience. Fill in the details
            below to join our speaker lineup.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@domain.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="aboutYourself"
              className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              About Yourself
            </label>
            <textarea
              id="aboutYourself"
              {...register("aboutYourself")}
              rows="4"
              placeholder="Tell us something about yourself..."
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
            {errors.aboutYourself && (
              <p className="text-red-600 text-sm mt-1">
                {errors.aboutYourself.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Your Experience
            </label>
            <textarea
              id="experience"
              {...register("experience")}
              rows="4"
              placeholder="Describe your speaking experience..."
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
            {errors.experience && (
              <p className="text-red-600 text-sm mt-1">
                {errors.experience.message}
              </p>
            )}
          </div>
          <div className="text-center flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-lg font-bold transition-colors duration-300"
            >
              <IoSend size={20} />
              Become a Speaker
            </button>
          </div>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          {exist && (
            <p className="text-red-500 text-center mt-4">
              This email is already registered!
            </p>
          )}
          {added && (
            <p className="text-green-500 text-center mt-4">
              Thank you for joining as a speaker!
            </p>
          )}
        </form>
        <p className="mt-8 text-center  text-gray-500">
          We will review your application and contact you with further details.
        </p>
      </div>
    </section>
  );
};
