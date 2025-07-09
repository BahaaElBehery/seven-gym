import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const SwiperSec = ({ img1, img2, img3 }) => {
  const { i18n } = useTranslation();
  return (
    <div dir="ltr" className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={true}
        key={i18n.language}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full relative h-screen   text-white p-10  shadow-lg text-center">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover bg-center absolute top-0 start-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen  text-white p-10  shadow-lg text-center">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover bg-center absolute top-0 start-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen   text-white p-10  shadow-lg text-center">
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
