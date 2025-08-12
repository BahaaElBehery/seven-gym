import RightSide from "./RightSide";

const Done = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-20" dir="ltr">
      <div className="">
        <img
          src="/Images/right-side.png"
          alt=""
          className="w-full h-[500px] object-contain bg-center max-lg:h-full"
        />
      </div>
      <RightSide />
    </div>
  );
};

export default Done;
