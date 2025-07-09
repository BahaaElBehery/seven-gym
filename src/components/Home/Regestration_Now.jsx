import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Regestration_Now = () => {
  const phoneNumber = "01033022733";
  const whatsappURL = `https://wa.me/2${phoneNumber}`;

  const { t } = useTranslation();
  return (
    <div className="bg-[url('/Images/File_003-scaled.jpeg')] bg-cover bg-center  gap-8 py-10 h-[300px] mt-20 flex flex-col items-center justify-center">
      <h1 className="uppercase text-3xl font-extrabold max-md:text-xl max-sm:text-lg max-sm:max-w-[250px] text-center">
        {t("registration now to get more deals")}
      </h1>
      <h2 className="text-2xl max-md:text-lg max-sm:text-sm capitalize">
        {t("Where health, beauty and fitness meet.")}
      </h2>
      <Link className="w-fit" to={whatsappURL} target="_blank">
        <button className="border px-5 py-3 border-orange-500 text-xl max-sm:text-base max-sm:px-3 max-sm:py-2 cursor-pointer transition duration-300 hover:bg-orange-400">
          {t("Appointment")}
        </button>
      </Link>
    </div>
  );
};

export default Regestration_Now;
