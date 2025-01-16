export const BecomeASponsor = () => {
  return (
    <div className="w-full">
      <button
        onClick={() => console.log("Become Sponsor")}
        className="min-w-[20rem] px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg lg:text-2xl font-bold"
      >
        Become Sponsor
      </button>
    </div>
  );
};
