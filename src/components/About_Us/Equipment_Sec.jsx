import { useTranslation } from "react-i18next";
import Whychoose from "../Home/Whychoose";
import Equipment from "./Equipment";
import ModernIcon from "../icons/ModernIcon";
import NutritionIcon from "../icons/NutritionIcon";
import TrainingPlan from "../icons/TrainingPlan";
import UniquePlan from "../icons/UniquePlan";

const Equipment_Sec = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex flex-col">
      <Whychoose
        title={t("why choose us")}
        desc={t("Push Your limits Forward")}
      />
      <div className="w-11/12 mx-auto grid grid-cols-2  max-sm:grid-cols-1 gap-10 mt-15">
        <Equipment
          svg={<ModernIcon />}
          h2={"Modern equipment"}
          p={
            "At Seven Gym, we equip you with the latest state-of-the-art machines to maximize your performance and safety. From smart resistance systems to advanced cardio technology — our modern equipment is designed to help you train harder, safer, and more efficiently. Experience the future of fitness with us."
          }
        />
        <Equipment
          svg={<NutritionIcon />}
          h2={"Healthy nutrition plan"}
          p={
            "A healthy nutrition plan is the true foundation of a strong and balanced body. With the right diet, you'll feel more energetic, focused, and see faster progress in your fitness journey. At Seven Gym, we provide practical, personalized meal plans tailored to your goals and your body’s needs."
          }
        />
        <Equipment
          svg={<TrainingPlan />}
          h2={"Proffesonal training plan"}
          p={
            "Your progress starts with a plan. At Seven Gym, we create professional, customized training programs tailored to your goals, fitness level, and body type. No guesswork – just science, structure, and results. Train smarter, not just harder."
          }
        />
        <Equipment
          svg={<UniquePlan />}
          h2={"Unique to your needs"}
          p={
            "Your journey is unique — and your plan should be too. At Seven Gym, we tailor every training and nutrition program to match your exact needs, goals, and lifestyle. No copy-paste routines — just real results, made for you."
          }
        />
      </div>
    </div>
  );
};

export default Equipment_Sec;
