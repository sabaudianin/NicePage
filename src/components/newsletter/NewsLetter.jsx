import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "./newsletterSchema";
import { IoSend } from "react-icons/io5";

export const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newsletterSchema) });

  const submitNewsletter = (data) => {
    console.log(data);
  };

  return (
    <section className="py-8 bg-indigo-100 dark:bg-neutral-900 flex justify-center items-center ">
      <div className="relative ">
        {/* <div className=" absolute top-5 left-5 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 w-full h-full px-15 py-10 rounded-tl-xl rounded-br-xl"></div>
        <div className=" absolute -top-5 -left-5 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 w-full h-full px-15 py-10 rounded-tl-xl rounded-br-xl"></div> */}

        <div className="relative flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-5 rounded-tl-xl rounded-br-xl">
          <h2 className="text-2xl p-2 text-shadow text-center font-bold">
            Don't miss news, Join newsletter
          </h2>

          <form
            className="flex items-center"
            onSubmit={handleSubmit(submitNewsletter)}
          >
            <input
              {...register("email")}
              className="p-4"
            />

            <button
              type="submit"
              className="bg-white p-5 text-indigo-500"
            >
              <IoSend />
            </button>
          </form>
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
      </div>
    </section>
  );
};
