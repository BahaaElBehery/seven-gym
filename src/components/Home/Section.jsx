import ChooseYour_Pricing from "./ChooseYour_Pricing";
import PowerZone from "./PowerZone";
import Regestration_Now from "./Regestration_Now";
import Sec_OurClasses from "./Sec_OurClasses";

const Section = () => {
  return (
    <section className="bg-[#212529] py-10 mt-20">
      <Sec_OurClasses />
      <Regestration_Now />
      <ChooseYour_Pricing />
      <PowerZone />
      {/* <div className="grid grid-cols-2 max-md:grid-cols-1 mt-20 *:w-full *:h-[500px] *:object-cover">
        <img src="/Images/swiper-3.jpeg" alt="" loading="lazy" />
        <img src="/Images/sec-2.jpg" alt="" loading="lazy" />
        <img src="/Images/sec-3.avif" alt="" loading="lazy" />
        <img src="/Images/sec-4.jpeg" alt="" loading="lazy" />
      </div> */}
    </section>
  );
};

export default Section;
