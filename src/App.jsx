import React from "react";

export const App = () => {
  console.log("App component rendered");
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-rubik">
      <h1 className="text-4xl font-bold text-red-500">Hello, Tailwind CSS!</h1>
    </div>
  );
};
