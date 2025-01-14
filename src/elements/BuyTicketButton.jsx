export const BuyTicketButton = () => {
  return (
    <div className="relative ">
      <div className="absolute top-1 left-1 w-full h-full rounded border-2 border-red-500 z-0 "></div>

      <button
        onClick={() => console.log("Buy ticket")}
        className="
            relative 
            z-1
            w-full
            px-20
            py-2
            bg-orange-400
            text-white
            rounded
            hover:bg-orange-600
            text-lg
            font-bold
            animate-bgPulse
            "
      >
        Buy Tickets
      </button>
    </div>
  );
};
