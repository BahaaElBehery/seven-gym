import SwiperSec from "../components/Home/SwiperSec";
import Equipment_Sec from "../components/About_Us/Equipment_Sec";
import Regestration from "../components/Home/Regestration_Now";
import Done from "../components/About_Us/Done";
import SwiperTestimonial from "../components/About_Us/SwiperTestimonial";

const About_Us = () => {
  return (
    <>
      <SwiperSec
        img1="/Images/about-us.jpeg"
        img2={`/Images/about-us2.jpeg`}
        img3={`/Images/about-us3.jpeg`}
      />
      <Equipment_Sec />
      <Done />
      <Regestration />

      <SwiperTestimonial />
    </>
  );
};

export default About_Us;
