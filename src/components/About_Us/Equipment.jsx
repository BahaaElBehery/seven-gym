import { useTranslation } from "react-i18next";

const Equipment = ({ h2, p, svg }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {svg}
      <h2 className="text-xl font-bold">{t(h2)} </h2>
      <p className="text-[#a9a9a9] text-sm text-center max-w-[400px]">{t(p)}</p>
    </div>
  );
};

export default Equipment;
