import React from "react";

const Whychoose = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-[#f36100] text-2xl font-bold max-sm:text-base">
        {title}
      </h2>
      <h3 className="text-4xl font-black mt-3 max-sm:text-xl">{desc}</h3>
    </div>
  );
};

export default Whychoose;
