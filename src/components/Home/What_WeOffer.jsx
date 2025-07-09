import React from "react";
import { useTranslation } from "react-i18next";

const What_WeOffer = ({ tit, cap, img }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between bg-black/60 p-5 rounded-lg">
      <img src={img} alt="" className="h-62 object-cover bg-center" />
      <span className="h-[5px] bg-gray-300 rounded-full"></span>
      <div className="flex flex-col *:mt-3">
        <h6 className="text-orange-500 text-lg max-sm:text-base">{t(tit)}</h6>
        <h5 className="text-2xl uppercase font-extrabold max-sm:text-lg">
          {t(cap)}
        </h5>
      </div>
    </div>
  );
};

export default What_WeOffer;
