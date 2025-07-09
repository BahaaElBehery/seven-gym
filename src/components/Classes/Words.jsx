import { useTranslation } from "react-i18next";

const Words = ({ t, p }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className="flex flex-col gap-5 max-lg:px-5"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl font-bold max-sm:text-xl">{t}</h2>

      <p className="text-sm text-[#c4c4c4] max-sm:text-xs">{p}</p>
    </div>
  );
};

export default Words;
