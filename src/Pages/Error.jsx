import React from "react";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-screen h-screen absolute top-0 left-0 bg-black  flex items-center justify-center">
        <div className="">
          <h1 className="text-4xl font-bold px-10">
            {t("Sorry Your Page Is Not Found ....")}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Error;
