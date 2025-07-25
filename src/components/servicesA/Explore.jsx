import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Explore = ({ h2, p }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-5 py-4 max-md:py-10 justify-center bg-[#313131] gap-5">
      <h2 className="text-xl font-bold uppercase max-sm:text-lg">{h2}</h2>
      <p className="text-sm max-sm:text-xs">{t(p)}</p>

      <Link className="w-fit hover:text-orange-600 transition duration-300">
        {t("Explore")}
      </Link>
    </div>
  );
};

export default Explore;
