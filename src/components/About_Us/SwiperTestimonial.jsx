import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Ahmed Ayman",
    text: "At Seven Gym, beauty isn’t just in the design — it’s in every detail of the experience. From the moment you walk in, you feel welcomed, respected, and truly supported. With modern equipment, high organization, cleanliness, and elegance, working out becomes a joy. Our clients always praise the safety, comfort, and motivation they find here, and they feel a real sense of belonging. Seven Gym isn’t just a gym — it’s a premium experience that combines quality, variety, and genuine care for every individual.",
    image: "/Images/489959772_2390956264593592_6062955516007846664_n.jpg",
    stars: 5,
  },

  {
    name: "Ahmed Abdo",
    text: "Seven Gym goes beyond just fitness — it’s where passion meets professionalism. Every session is more than a workout; it’s an experience shaped by world-class equipment, a clean and motivating environment, and a team that truly cares. Members feel inspired, valued, and empowered to reach their goals. It’s not just about muscles — it’s about mindset, progress, and community.",
    image: "/Images/file.enc",
    stars: 4,
  },
  {
    name: "Mohamed Alaa",
    text: "Seven Gym isn’t just a place to train — it’s where passion meets professionalism. Every workout is more than just physical effort; it’s a complete experience with world-class equipment, spotless cleanliness, an inspiring atmosphere, and a team that truly cares. Here, you’ll feel motivated, valued, and ready to achieve your goals. It’s not just about muscles — it’s about mindset, progress, and team spirit.",
    image: "/Images/m.alaa.enc",
    stars: 4,
  },
];

const SwiperTestimonial = () => {
  const swiperRef = useRef();
  const { t } = useTranslation();
  return (
    <section
      className="bg-black text-white py-20 text-center relative"
      dir="ltr"
    >
      <h4 className="text-orange-500 text-sm font-bold mb-2">
        {t("TESTIMONIAL")}
      </h4>
      <h2 className="text-3xl font-extrabold mb-8 uppercase max-sm:text-2xl">
        {t("OUR CLIENT SAY")}
      </h2>

      {/* السهم الشمال */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-10 max-sm:left-5 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-md hover:bg-white/20 z-50 flex items-center justify-center"
      >
        <LeftArrow />
      </button>

      {/* السهم اليمين */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-10 max-sm:right-5 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 max-sm:w-8 max-sm:h-8 h-10 rounded-md hover:bg-white/20 z-50 flex items-center justify-center"
      >
        <RightArrow />
      </button>

      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((te, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center gap-6  px-4">
              <img
                src={te.image}
                className="w-42 h-42 object-contain   rounded-full border-4 border-white shadow-lg"
              />
              <p className="text-gray-300 max-md:max-w-[350px] max-sm:max-w-[200px] max-sm:text-xs">
                {t(te.text)}
              </p>
              <h4 className="font-bold mt-2">{t(te.name)}</h4>
              <div className="flex gap-1 justify-center text-yellow-400">
                {Array(te.stars)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperTestimonial;
