import React from "react";
import Whychoose from "./Whychoose";
import Pricing from "./Pricing";
import { useTranslation } from "react-i18next";

const ChooseYour_Pricing = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20 py-10">
      <Whychoose title={t("Our Plan")} desc={t("CHOOSE YOUR PRICING PLAN")} />
      <div
        className=" max-w-11/12 max-lg:px-8 mx-auto grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 mt-20"
        dir="ltr"
      >
        <Pricing month={`1 Month Unlimited`} Price={`450 EGP`} />
        <Pricing month={`3 months Unlimited`} Price={`900 EGP`} />
        <Pricing month={`1 Year Unlimited`} Price={`2500 EGP`} />
      </div>
    </div>
  );
};

export default ChooseYour_Pricing;
