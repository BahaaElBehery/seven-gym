import IFrame from "../components/Contact_Us/IFrame";
import Reach_TO_US from "../components/Contact_Us/Reach_TO_US";

import SwiperSec from "../components/Home/SwiperSec";

const Contact_Us = () => {
  return (
    <>
      <SwiperSec
        img1="/Images/Contact_Us_1.jpg"
        img2="/Images/contact-us-pic.webp"
        img3="/Images/Contact_Us_3.jpg"
      />
      <Reach_TO_US />
      <IFrame />
    </>
  );
};

export default Contact_Us;
