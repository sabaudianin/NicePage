import { IoSend } from "react-icons/io5";
import { useSponsorForm } from "../../hooks/useSponsorForm";

export const SponsorForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    error,
    exist,
    added,
  } = useSponsorForm();

  return (
    <section className="flex justify-center items-center py-8 lg:py-16 bg-white dark:bg-gray-800">
      <div className="w-full max-w-2xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-orange-500 mb-4">
            Become a Sponsor
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Secure your spot at Coding Bros and elevate your brand’s presence.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
              required
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@domain.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="additionalInfo"
              className="block  font-medium text-gray-900 dark:text-gray-50 mb-2"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="additionalInfo"
              {...register("additionalInfo")}
              rows="4"
              placeholder="Any special requests or additional details..."
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-200 dark:border-gray-600 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center w-full flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-lg font-bold transition-colors duration-300"
            >
              <IoSend />
              Become Sponsor
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
              Thank you for becoming a sponsor!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
