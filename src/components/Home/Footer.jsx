import Facebook from "../icons/Facebook";
import Insta from "../icons/Insta";
import X from "../icons/X";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
useTranslation;
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div
        className="w-11/12 mx-auto grid grid-cols-3 max-md:grid-cols-1 max-md:gap-20 gap-5 mt-10"
        dir="ltr"
      >
        {/* first div */}
        <div className="">
          <div className="flex flex-col">
            <h2 className="text-[40px] max-md:text-3xl uppercase">
              Seven g<span className="text-orange-400">ym</span>
            </h2>
            <p className="text-[15px] max-md:text-sm text-[#c4c4c4] my-4 max-w-[350px]">
              {t(
                "At Seven Gym, we don’t just build muscles — we build a lifestyle. With a motivating atmosphere, professional trainers, and cutting-edge equipment, your transformation starts here. Join us and take the first step toward a stronger body and better health! "
              )}
            </p>

            <div className="flex items-center  gap-3 *:cursor-pointer">
              {/* facebook svg */}
              <Facebook color={"white"} />
              {/* insta svg */}
              <Insta color={"white"} />
              {/* x svg */}
              <X color={"white"} />
            </div>
          </div>
        </div>
        {/* second dev */}

        <div className="flex items-center flex-col *:capitalize *:mb-2 *:w-fit">
          <h3 className="text-2xl font-bold">{t("Useful links")} </h3>
          <Link to={`/about`} className="text-[#c4c4c4]">
            {t("about")}
          </Link>
          <Link to={`/classes_detail`} className="text-[#c4c4c4]">
            {t("classes")}{" "}
          </Link>
          <Link to={`/contact`} className="text-[#c4c4c4]">
            {t("contact")}{" "}
          </Link>
        </div>

        <div
          className="flex flex-col max-md:col-span-full"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="text-2xl max-sm:text-xl font-black mb-3">
            {t("Tips & Guides")}
          </h2>
          <h3 className="text-[#c4c4c4] max-sm:text-xs">
            {t("Physical fitness may help prevent depression, anxiety")}
          </h3>
          <span className="w-full h-[1px] bg-gray-600 my-2"></span>
          <h3 className="text-[#c4c4c4] max-sm:text-xs">
            {t("Fitness: The best exercise to lose belly fat and tone up...")}
          </h3>
        </div>
      </div>

      <div className="w-11/12 mx-auto py-10 border-t max-sm:text-xs border-gray-500 mt-10 flex items-center justify-center">
        <p>{t("Copyright ©2025 All rights reserved")} </p>
      </div>
    </footer>
  );
};

export default Footer;
