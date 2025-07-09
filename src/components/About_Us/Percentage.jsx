const Percentage = ({ title, Per }) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center justify-between">
        <p className="text-white font-bold">{title}</p>
        <p>{Per}</p>
      </div>

      <div className="mt-2 h-[2px]  bg-[#212529] relative">
        <span
          style={{ width: Per }}
          className={`absolute  h-full top-0 start-0 bg-[#ffffff]`}
        ></span>
      </div>
    </div>
  );
};

export default Percentage;
