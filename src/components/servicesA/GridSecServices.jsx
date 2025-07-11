import Explore from "./Explore";
import Whychoose from "../Home/Whychoose";
import GridServices from "./GridServices";
import { useTranslation } from "react-i18next";
const GridSecServices = () => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 mx-auto mt-20 flex flex-col gap-10">
      <Whychoose title={t(`What We Do`)} desc={t(`Push Your Limits Forward`)} />
      <div className="">
        <GridServices
          img1={"/Images/personal.jpg"}
          title1={t("Personal Training")}
          p1={
            "Your personal trainer is not just a coach, but your partner in every step towards a better, healthier you."
          }
          img2={"/Images/fitnessClasses.avif"}
          title2={t("Group fitness classes")}
          p2={
            "Behind every transformation, there’s a personal trainer who believed in you before you believed in yourself."
          }
        />

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 min-h-[300px] max-lg:mt-5">
          <Explore
            h2={`Srength Training`}
            p={`"Strength training isn't just about lifting weights – it's about lifting your confidence, resilience, and power in life."`}
          />
          <img
            src="/Images/str.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <Explore
            h2={`Body Building`}
            p={`Bodybuilding is an art – your body is the canvas, and every rep is a brushstroke shaping a masterpiece.`}
          />
          <img
            src="/Images/master-bb.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GridSecServices;
