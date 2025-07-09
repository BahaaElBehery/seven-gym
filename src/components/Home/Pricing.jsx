import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Pricing = ({ Price, month }) => {
  const { t } = useTranslation();
  const phoneNumber = "01033022733";
  const whatsappURL = `https://wa.me/2${phoneNumber}`;

  return (
    <div className="relative border border-gray-600 py-10 -rotate-3 cursor-default hover:bg-gray-100 transition duration-300 *:transition-all *:duration-300 group">
      <div className="flex flex-col items-center justify-center *:my-3 rotate-3">
        <h2 className="text-3xl max-md:text-xl font-extrabold group-hover:text-black">
          {t(month)}
        </h2>
        <h3 className="text-orange-500 text-3xl max-xl:text-2xl font-black">
          {t(Price)}
        </h3>
        <h5 className="text-2xl font-black text-[#c4c4c4] max-md:text-xl group-hover:text-gray-400">
          {t("Single Class")}
        </h5>
        <div className="text-center max-sm:text-xs max-md:text-sm *:my-2 *:text-[#c4c4c4] *:group-hover:text-black">
          <p>{t("Free Riding")}</p>
          <p>{t("Unlimited equipment")}</p>
          <p>{t("Personal trainer")}</p>
          <p>{t("Weight losing classes")}</p>
          <p>{t("Month to mouth")} </p>
          <p>{t("No time restriction")} </p>
        </div>

        <Link
          className="text-xl max-sm:text-sm text-center max-md:text-base font-black bg-[#333333] w-[80%]  py-3 cursor-pointer group-hover:bg-orange-600"
          to={whatsappURL}
          target="_blank"
        >
          {t("ENROLL NOW")}
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
