export const BuyTicketButton = () => {
  return (
    <div className="w-full">
      <button
        onClick={() => console.log("Buy ticket")}
        className="min-w-[20rem] px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 text-lg lg:text-2xl font-bold  animate-bgPulse "
      >
        Buy Tickets
      </button>
    </div>
  );
};
