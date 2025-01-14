export const SpeakerCard = ({ name, about, img }) => {
  return (
    <div className="relative flex justify-center flex-col items-center gap-2 p-10">
      <div className=" w-64 h-64 bg-indigo-500 rounded-lg flex justify-center items-center ">
        <div className=" w-60 h-60 bg-purple-500 rounded-lg flex justify-center items-center ">
          <div className=" w-56 h-56 bg-pink-400 rounded-lg flex justify-center items-center ">
            <div
              className={`bg-[url('${img}')]  bg-cover bg-center w-52 h-52 rounded-full  hover:scale-105 duration-300`}
            ></div>
          </div>
        </div>
      </div>

      <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-shadow mb-3 text-center">
        {name}
      </h3>
      <span>{about}</span>
    </div>
  );
};
