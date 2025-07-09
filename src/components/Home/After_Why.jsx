import React from "react";

const After_Why = () => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-5">
      {/* svg */}
      <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center  transition-all duration-300 hover:bg-orange-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="50"
          height="50"
        >
          <path d="M21 10h-1V7a1 1 0 0 0-2 0v3h-2V6a1 1 0 1 0-2 0v4H10V6a1 1 0 1 0-2 0v4H6V7a1 1 0 0 0-2 0v3H3a1 1 0 1 0 0 2h1v3a1 1 0 0 0 2 0v-3h2v4a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0v-4h2v3a1 1 0 0 0 2 0v-3h1a1 1 0 1 0 0-2z" />
        </svg>
      </div>
      {/* title */}
      <h2 className="text-2xl text-center font-bold">Modern Equipment</h2>
      <p className="text-gray-500 text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut dolore facilisis.
      </p>
    </div>
  );
};

export default After_Why;
