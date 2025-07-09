import Explore from "./Explore";

const GridServices = ({ img1, title1, p1, img2, title2, p2 }) => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1 min-h-[300px]">
      <img src={img1} alt="" className="w-full h-full object-cover" />
      <Explore h2={title1} p={p1} />
      <img src={img2} alt="" className="w-full h-full object-cover" />
      <Explore h2={title2} p={p2} />
    </div>
  );
};

export default GridServices;
