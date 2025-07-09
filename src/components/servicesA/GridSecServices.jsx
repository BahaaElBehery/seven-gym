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
          p1={t(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quas."
          )}
          img2={"/Images/fitnessClasses.avif"}
          title2={t("Group fitness classes")}
          p2={t(
            "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus."
          )}
        />

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 min-h-[300px] max-lg:mt-5">
          <Explore
            h2={t(`Srength Training`)}
            p={t(
              `Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.`
            )}
          />
          <img
            src="/Images/str.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <Explore
            h2={t(`Body Building`)}
            p={t(
              `Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.`
            )}
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
