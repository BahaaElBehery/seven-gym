import React from "react";

const UniquePlan = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-20 h-20 text-purple-500 hover:text-white transition duration-500 hover:bg-purple-500 p-3 rounded-full bg-[#ffffff1a]"
      >
        {/* رأس الشخص */}
        <circle cx="32" cy="20" r="6" />
        {/* جسم الشخص */}
        <path d="M20 44c0-6.6 5.4-12 12-12s12 5.4 12 12" />
        {/* رمز التخصيص – ترس */}
        <circle cx="48" cy="16" r="3" />
        <path d="M48 10v2M48 20v2M52.2 12.2l-1.4 1.4M44.2 18.2l-1.4 1.4M52.2 19.8l-1.4-1.4M44.2 13.8l-1.4-1.4" />
      </svg>
    </>
  );
};

export default UniquePlan;
