export const BuyTicketButton = () => {
  return (
    <div className="relative inline-block">
      <div className="absolute top-1 left-1 w-full h-full rounded       border-2 border-orange-500 z-0 "></div>

      <button
        onClick={() => console.log("Buy ticket")}
        className="
            relative 
            z-10
            px-20
            py-2
            bg-orange-400
            text-white
            rounded
            hover:bg-orange-600
            text-lg
            font-medium
            animate-bgPulse
          "
      >
        Buy Tickets
      </button>
    </div>
  );
};
