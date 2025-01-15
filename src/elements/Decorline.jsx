export const DecorLine = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="after:content-[''] after:text-red-500 block text-sm font-medium text-slate-700 border-4 border-pink-500 rounded-full p-1"></p>
      <p className="after:content-[''] border-4 border-pink-500 rounded-full p-2"></p>

      <span className="after:content-[''] after:text-red-500 block text-sm font-medium text-slate-700 border-b-2 border-pink-500 w-3/4"></span>
      <p className="after:content-['']  border-4 border-pink-500 rounded-full p-2"></p>
      <p className="after:content-['']  border-4 border-pink-500 rounded-full p-1"></p>
    </div>
  );
};
