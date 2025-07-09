import React from "react";
import ContactLocatee from "./ContactLocatee";
import { useTranslation } from "react-i18next";

const Get_In_Touch = () => {
  const Locationicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#F97316" // orange-500
      viewBox="0 0 24 24"
      width="30"
      height="30"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
  const Mobile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-orange-500"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm0 18H7V5h10v14Z" />
    </svg>
  );
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <h3 className="text-orange-500">{t("Contact Us")} </h3>
      <h2 className="text-3xl font-black mt-3">{t("Get in touch")}</h2>
      <ContactLocatee
        Locate={Locationicon}
        title={
          <p className="flex-1 max-sm:text-xs max-sm:max-w-[200px]">
            {t("El Mokattam El Hadaba El Wasta St: El Gamaa El Haditha")}
          </p>
        }
      />
      <ContactLocatee
        Locate={Mobile}
        title={[
          <a
            href="tel:+201033022733"
            className="text-white hover:underline max-lg:flex-1 max-sm:text-sm"
            key="1"
          >
            +20 103 302 2733
          </a>,
          <a
            href="tel:+201226251525"
            className="text-white hover:underline max-lg:flex-1 max-sm:text-sm"
            key="2"
          >
            +20 122 625 1525
          </a>,
        ]}
      />
    </div>
  );
};

export default Get_In_Touch;
