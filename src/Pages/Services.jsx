import SwiperSec from "../components/Home/SwiperSec";

import GridSecServices from "../components/servicesA/GridSecServices";
import Regestration_Now from "../components/Home/Regestration_Now";
import ChooseYour_Pricing from "../components/Home/ChooseYour_Pricing";

const Services = () => {
  return (
    <>
      <SwiperSec
        img1="/Images/persons/s1.jpeg"
        img2="/Images/persons/s2.jpeg"
        img3="/Images/persons/448e4eb9-34bd-4f44-a0c1-d4e85cf790aa.jpeg"
      />

      <GridSecServices />
      <Regestration_Now />
      <ChooseYour_Pricing />
    </>
  );
};

export default Services;
