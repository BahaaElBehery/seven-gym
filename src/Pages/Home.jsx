import SwiperSec from "../components/Home/SwiperSec";

import Section from "../components/Home/Section";

import GymProgress from "../components/Home/GymProgress";
import { useTranslation } from "react-i18next";

const Home = () => {
  const CountGym_Members = 8;
  const { t } = useTranslation();
  return (
    <>
      <SwiperSec
        img1="/Images/pexels-photo-841130.jpeg"
        img2="/Images/swiper-bar-1.jpg"
        img3="/Images/sec-1.jpg"
      />

      <GymProgress
        percentage={8}
        text={t("community_count", { count: CountGym_Members })}
      />
      <Section />
    </>
  );
};

export default Home;
