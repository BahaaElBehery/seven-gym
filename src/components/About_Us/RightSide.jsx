import { useTranslation } from "react-i18next";
import Percentage from "./Percentage";

const RightSide = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`px-10 pt-20 pb-8`}
      dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="flex flex-col">
        <h2 className="text-orange-400 text-lg capitalize">{t("about us")}</h2>
        <h3 className="text-3xl font-bold mt-3 max-sm:text-2xl">
          {t("What We have done")}
        </h3>
        <p className="text-[#c4c4c4] text-sm mt-10 max-sm:text-xs max-w-[400px]">
          {t(
            "Every step we’ve taken reflects our passion, progress, and commitment. These milestones are just the beginning of what’s yet to come."
          )}
        </p>

        <Percentage title={t("Body Building")} Per={`80%`} />
        <Percentage title={t("Training")} Per={`85%`} />
        <Percentage title={t("Fitness")} Per={`75%`} />
      </div>
    </div>
  );
};

export default RightSide;
