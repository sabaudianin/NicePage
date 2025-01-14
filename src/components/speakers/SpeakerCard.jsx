export const SpeakerCard = ({ name, about, img }) => {
  return (
    <div className="relative flex justify-center flex-col items-center my-4 gap-1">
      <div className="w-40 h-40 lg:w-60 lg:h-60 bg-black-300 rounded-lg flex justify-center items-center border-2 border-y-1 border-pink-500">
        <div
          className="bg-cover bg-center w-36 h-36 lg:w-52 lg:h-52 rounded-full hover:scale-105 duration-300 border-1 border-x-2 border-pink-500 shadow-lg"
          style={{ backgroundImage: `url(${img})` }} //
        ></div>
      </div>

      <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-shadow text-center">
        {name}
      </h3>
      <span>{about}</span>
    </div>
  );
};
