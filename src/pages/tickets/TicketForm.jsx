import { AiOutlineDown } from "react-icons/ai";

export const TicketForm = () => {
  return (
    <section className=" bg-indigo-200  dark:bg-gray-500 flex justify-center items-center py-12">
      <div className="w-full px-6 md:px-10 lg:px-96">
        <div className="text-center mb-8 lg:px-36">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4 text-orange-500">
            Get Your Ticket
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Secure your spot at Coding Bros and experience the future of coding.
          </p>
        </div>
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
          {/* Full Name Field */}
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

          {/* Email Field */}
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

          {/* Ticket Type Field */}
          <div className="mb-6">
            <label
              htmlFor="ticketType"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-50"
            >
              Ticket Type
            </label>
            <select
              id="ticketType"
              name="ticketType"
              className="block w-full px-4 py-2 text-base rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:outline-none border border-gray-200 dark:border-gray-600"
              defaultValue=""
              required
            >
              <option
                value=""
                disabled
              >
                Select Ticket Type
              </option>
              <option value="student">Student - $49</option>
              <option value="business">Business - $99</option>
              <option value="vip">VIP - $199</option>
            </select>
          </div>

          {/* Additional Info Field */}
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

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-lg font-bold transition-colors duration-300"
            >
              Purchase Ticket
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
