import { useTranslation } from "react-i18next";

const Translate = ({ color }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="30"
        height="30"
        className="text-white cursor-pointer"
        onClick={toggleLanguage}
      >
        <path d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9c-2-2.5-3-5.5-3-9s1-6.5 3-9Z" />
      </svg>
    </>
  );
};

export default Translate;
