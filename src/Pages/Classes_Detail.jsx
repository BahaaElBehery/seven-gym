import { Link } from "react-router-dom";
import GridCom from "../components/Classes/GridCom";
import GymSchedule from "../components/Classes/GymSchedule";
import SwiperSec from "../components/Home/SwiperSec";
import TRainerComponent from "../components/Classes/TRainer-Component";

const Classes_Detail = () => {
  return (
    <>
      <SwiperSec
        img1="/Images/classes-1.jpg"
        img2="/Images/classes-2.jpg"
        img3="/Images/persons/bahaa.jpeg"
      />
      <GridCom />
      <TRainerComponent />
      <GymSchedule />
    </>
  );
};

export default Classes_Detail;
