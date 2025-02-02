import { NavLink } from "react-router";
export const JoinAsASpeaker = () => {
  return (
    <div className="w-full">
      <button
        onClick={() => console.log("Join As A sepeaker")}
        className="min-w-[20rem]  px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-lg lg:text-2xl font-bold"
      >
        <NavLink to="/speakers">Join as a Speaker</NavLink>
      </button>
    </div>
  );
};
