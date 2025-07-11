import SwiperSec from "../components/Home/SwiperSec";

import GridSecServices from "../components/servicesA/GridSecServices";
import Regestration_Now from "../components/Home/Regestration_Now";
import ChooseYour_Pricing from "../components/Home/ChooseYour_Pricing";

const Services = () => {
  return (
    <>
      <SwiperSec
        img1="/Images/services.webp"
        img2="/Images/services2.webp"
        img3="/Images/services3.webp"
      />

      <GridSecServices />
      <Regestration_Now />
      <ChooseYour_Pricing />
    </>
  );
};

export default Services;
