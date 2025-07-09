const NutritionIcon = () => {
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
        className="w-20 h-20 text-green-500 hover:text-white transition duration-500 hover:bg-green-500 p-3 rounded-full bg-[#ffffff1a]"
      >
        {/* جسم التفاحة */}
        <path d="M32 38c6 0 10-6 10-12s-4-10-10-10-10 4-10 10 4 12 10 12z" />

        {/* الذيل */}
        <path d="M32 16v4" />

        {/* الورقة */}
        <path d="M36 14c-2 0-4 1-4 3" />
      </svg>
    </>
  );
};

export default NutritionIcon;
