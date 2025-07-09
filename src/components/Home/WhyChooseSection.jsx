import After_Why from "./After_Why";
import Whychoose from "./Whychoose";

const WhyChooseSection = () => {
  return (
    <div className="mt-20">
      <Whychoose title="Why Choose Us ?" desc="PUSH YOUR LIMITS FORWARD" />
      <div className="w-10/12 mx-auto grid grid-cols-4 gap-8 mt-20">
        <After_Why />
        <After_Why />
        <After_Why />
        <After_Why />
      </div>
    </div>
  );
};

export default WhyChooseSection;
