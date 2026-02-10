import { IoSend } from "react-icons/io5";
import { useNewsletterForm } from "../../hooks/useNewsLetterForm";

export const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    error,
    exist,
    added,
  } = useNewsletterForm();

  return (
    <section className="py-16 lg:py-24 bg-indigo-100 dark:bg-neutral-900 flex justify-center items-center flex-col ">
      <div className="relative ">
        <div className="absolute top-5 md:left-5 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-400 w-full h-full px-15 py-10 rounded-tl-xl rounded-br-xl"></div>
        <div className="absolute -top-5 md:-left-5 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-400 w-full h-full px-15 py-10 rounded-tl-xl rounded-br-xl"></div>

        <div className="relative flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 md:px-20 py-5 rounded-tl-xl rounded-br-xl">
          <h2 className="text-3xl p-4 text-shadow text-center font-bold">
            Don't miss news, Join newsletter
          </h2>

          <form
            className="flex items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Write Your email"
              // aria-label="Write Your email"
              {...register("email")}
              className="p-4 font-semibold text-black "
            />

            <button
              type="submit"
              className="bg-white p-5 text-indigo-500"
              disabled={loading}
            >
              <IoSend />
            </button>
          </form>

          <span className="text-xxs p-1">
            By providing your email address you accept the Privacy Policy.
          </span>
          {errors.email && (
            <p className="text-xl text-shadow font-semibold">
              {errors.email.message}
            </p>
          )}

          {error && (
            <p className="text-red-600 text-xl font-semibold mt-2">{error}</p>
          )}

          {exist && (
            <p className="text-red-500 text-xl font-semibold mt-2">
              This email is already in our newsletter!
            </p>
          )}

          {added && (
            <p className="text-green-500 text-xl font-semibold mt-2">
              Thank you for joining our newsletter!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
