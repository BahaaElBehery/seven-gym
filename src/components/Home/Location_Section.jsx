import LocateI from "../icons/LocateI";
import Telephone from "../icons/Telephone";
import Location from "./Location";
import { useTranslation } from "react-i18next";

const Location_Section = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-[#0c0c0c] py-8" dir="ltr">
      <div className=" w-11/12 max-lg:w-10/12 mx-auto grid grid-cols-2 max-xl:grid-cols-1 gap-5">
        <Location
          icon={<LocateI />}
          items={[t("El MOKATTAM EL HADABA EL WASTA ST: EL GAMAA ELHADITHA")]}
        />
        <Location
          icon={<Telephone />}
          items={[
            <a
              href="tel:+201033022733"
              className="text-white hover:underline"
              key="1"
            >
              +20 103 302 2733
            </a>,
            <a
              href="tel:+201226251525"
              className="text-white hover:underline"
              key="2"
            >
              +20 122 625 1525
            </a>,
          ]}
        />
      </div>
    </div>
  );
};

export default Location_Section;
