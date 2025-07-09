import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TRainerComponent = () => {
  const mobile = +201031618693;
  const massage = `https://wa.me/${mobile}?text=عايز%20أرفع%20مستوى%20تمرينى%20مع%20مدرب%20شخصي`;
  const { t } = useTranslation();
  return (
    <>
      <div className="w-11/12 h-[500px] bg-no-repeat bg-cover  object-cover mt-20 bg-[url('/Images/personal-trainer.jpg')]  mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full bg-black/60">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl max-lg:text-3xl px-5 max-sm:text-xl max-w-[800px]">
              {t("ELEVATE YOUR WORKOUT STRATEGY WITH A PERSONAL TRAINER")}
            </h2>
            <Link
              to={massage}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-xl max-sm:text-base w-fit py-2 px-4  transition-all duration-300 hover:bg-black/70"
            >
              {t("Contact A Personal Trainer")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TRainerComponent;
