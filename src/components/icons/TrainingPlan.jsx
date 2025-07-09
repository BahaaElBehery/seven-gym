const TrainingPlan = () => {
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
        className="w-20 h-20 text-blue-500 hover:text-white transition duration-500 hover:bg-blue-500 p-3 rounded-full bg-[#ffffff1a]"
      >
        {/* دفتر الخطة */}
        <rect x="12" y="10" width="40" height="44" rx="4" />
        <path d="M20 10v44" /> {/* خط فصل الصفحة */}
        <path d="M28 20h20" /> {/* خط تمرين 1 */}
        <path d="M28 30h20" /> {/* خط تمرين 2 */}
        <path d="M28 40h20" /> {/* خط تمرين 3 */}
      </svg>
    </>
  );
};

export default TrainingPlan;
