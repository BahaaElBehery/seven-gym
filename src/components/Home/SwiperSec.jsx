import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";

const SwiperSec = ({ img1, img2, img3 }) => {
  const { i18n } = useTranslation();
  return (
    <div dir="ltr">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        autoplay={{
          delay: 3000, // 3 ثواني
          disableOnInteraction: false,
        }}
        speed={1000} // سرعة الانتقال 1 ثانية
        key={i18n.language}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full relative h-screen text-white shadow-lg text-center">
            <img
              src={img1}
              alt=""
              className="w-full h-full  object-cover absolute top-0 start-0"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full relative h-screen text-white shadow-lg text-center">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover bg-center absolute top-0 start-0"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full relative h-screen text-white shadow-lg text-center">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover bg-center absolute top-0 start-0"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSec;
