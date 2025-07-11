import Whychoose from "./Whychoose";
import What_WeOffer from "./What_WeOffer";
import { useTranslation } from "react-i18next";

const Sec_OurClasses = () => {
  const { t } = useTranslation();

  return (
    <>
      <Whychoose title={t("Our Classes")} desc={t("What We Can Offer")} />
      <div className="w-11/12 mx-auto grid grid-cols-3 max-lg:grid-cols-1 gap-10 mt-10">
        <What_WeOffer
          img={"/Images/strength.jpeg"}
          tit={"Strength"}
          cap={"Weigthlifting"}
        />

        <What_WeOffer
          img={"/Images/Cardio.jpg"}
          tit={"Cardio"}
          cap={"Indoor cycling"}
        />
        <What_WeOffer
          img={"/Images/kettlebell-swing-russian-65a545944fe15.avif"}
          tit={`Strength`}
          cap={`Kettlebell power`}
        />

        <div className="col-span-full">
          <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-10 *:w-full">
            <div className="bg-black/60 flex flex-col p-5 rounded-md">
              <img
                src="/Images/class-4.jpg"
                alt=""
                className="w-full h-full rounded-md object-cover bg-center"
              />
              <div className="flex flex-col *:mt-4">
                <h2 className="text-xl text-orange-500 max-sm:text-lg">
                  {t("Cardio")}
                </h2>
                <h2 className="text-3xl font-bold max-sm:text-xl">
                  {t("Indoor Cycling")}
                </h2>
              </div>
            </div>

            <div className="bg-black/60 flex flex-col p-5 rounded-md">
              <img
                src="/Images/class-5.jpg"
                alt=""
                className="w-full rounded-md"
              />
              <div className="flex flex-col *:mt-4">
                <h2 className="text-xl text-orange-500 max-sm:text-lg">
                  {t("Training")}
                </h2>
                <h2 className="text-3xl font-bold max-sm:text-xl">
                  {t("BOXING")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec_OurClasses;
