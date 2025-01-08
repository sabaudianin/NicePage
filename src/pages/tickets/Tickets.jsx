export const Tickets = () => {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-around bg-green-100">
      <h1 className="text-3xl">Welcome to Tickets Page</h1>
      <div className="relative inline-block">
        <div className="absolute w-64 h-16 bg-pink-500 -translate-y-2 translate-x-2 rounded-md"></div>

        <div className="relative w-64 h-16 bg-blue-500 flex items-center justify-center text-white font-bold rounded-md">
          Dwa-trzy-cztery
        </div>
      </div>
      <div
        className="
        relative inline-block z-0
        bg-blue-500 text-white font-bold
        px-6 py-3 rounded-md
        before:content-[''] 
        before:absolute 
        before:z-[-1] 
        before:bg-red-500 
        before:rounded-md 
        before:top-2 
        before:left-2
        before:w-full
        before:h-full
      "
      >
        Pseudoelement w Tailwindzie
      </div>
      <div
        className="
        relative inline-block 
        bg-blue-500 
        text-white 
        font-bold
        px-6 py-3 
        rounded-md
        z-0
        before:content-[''] 
        before:absolute 
        before:z-[-1] 
        before:bg-red-500 
        before:rounded-md 
        before:top-2 
        before:left-2
        before:w-full
        before:h-full
      "
      >
        Tekst
      </div>

      <div className="relative inline-block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-40 h-40 bg-red-500 rounded-full z-0"></div>

        <div
          className="
      relative 
      w-40 h-40
      bg-blue-500 
      text-white 
      font-bold 
      flex items-center justify-center
      rounded-md
      z-10
    "
        >
          o to chodzi
        </div>
      </div>

      <div
        className="relative before:content-[''] before:absolute before:bg-red-500 before:rounded-full before:w-40 before:h-40 before:z-0 before:top-full before:left-full before:-translate-x-1/2 before:-translate-y-1/2
  "
      >
        <div className="relative w-40 h-40 bg-blue-500 text-white font-bold flex items-center justify-center rounded-md z-10">
          o to chodzi2
        </div>
      </div>
    </div>
  );
};
