import { useTranslation } from "react-i18next";
import CAtText from "./CAtText";
import Words from "./Words";

const GridCom = () => {
  const { t, i18n } = useTranslation();
  const words = [
    {
      title: "Body Building",
      paragraph:
        "Bodybuilding isn’t just a sport—it’s a journey of challenge and discipline. Every workout is a battle, and every muscle built comes with pain, effort, and patience. The path is tough, but each step brings you closer to your dream. It’s not just your body that changes—your mind grows stronger too. You learn to stay patient, stay committed, and keep going even when you're tired. Mass isn’t only in appearance—it’s in spirit, willpower, and resilience. Start with one step, and always remember: it’s not about where you are, it’s about moving forward. Your body reflects your life… your strength, struggle, and discipline.",
    },
    {
      title: "Trainer",
      paragraph:
        "A trainer isn’t just someone who tells you what to do—he’s your partner on the journey, seeing your strength before you see it yourself. Every word of encouragement comes from experience, and every correction aims to protect and improve you. He pushes you when you want to quit, and believes in you when you doubt yourself. A real trainer listens, cares, and customizes your path to help you become your best version. He’s not just a trainer—he’s a motivator, a leader, sometimes even a therapist. His presence makes a difference, and his voice during a workout keeps you going. Choosing the right trainer can transform your whole journey… because he doesn’t just build your muscles—he builds your confidence.",
    },
  ];
  return (
    <div
      className="w-11/12 mx-auto grid grid-cols-3  max-lg:grid-cols-1 gap-15 mt-20"
      dir="ltr"
    >
      <div className="col-span-2 max-lg:col-span-full  flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <img
            src="/Images/photo.jpg"
            alt=""
            className="object-cover bg-center w-full"
          />
        </div>

        {/* text */}

        <Words t={t(words[0].title)} p={t(words[0].paragraph)} />
        <Words t={t(words[1].title)} p={t(words[1].paragraph)} />
      </div>

      <div
        className="flex flex-col gap-10"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="text-2xl font-semibold">{t("Categories")}</h2>
        <CAtText txt={t(`Yoga`)} number={`12`} />
        <CAtText txt={t(`Runing`)} number={`32`} />
        <CAtText txt={t(`Weightloss`)} number={`86`} />
        <CAtText txt={t(`Cardio`)} number={`25`} />
        <CAtText txt={t(`Body Building`)} number={`36`} />
        <CAtText txt={t(`Nutrition`)} number={`15`} />
        <img src="/Images/Categories-1.webp" alt="" />
      </div>
    </div>
  );
};

export default GridCom;
