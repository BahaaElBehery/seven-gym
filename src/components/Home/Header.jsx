import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Translate from "../icons/Translate";
import Facebook from "../icons/Facebook";
import X from "../icons/X";
import Insta from "../icons/Insta";
import Dumble from "../icons/Dumble";
import HamburgerIcon from "../icons/HamburgerIcon";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const links = [
    { name: "home", to: "/" },
    { name: "about us", to: "/about" },
    { name: "classes", to: "/classes_detail" },
    { name: "services", to: "/services" },
    { name: "contact", to: "/contact" },
  ];
  const [popup, setPopup] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    }

    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popup]);

  return (
    <>
      <header
        className="max-w-[2000px] px-10 max-sm:px-5 py-8 flex items-center justify-between w-full absolute top-0 start-0 z-[50] text-white  max-lg:z-[100]"
        dir="ltr"
      >
        {/* sec 01 */}
        <Link
          className="flex items-center justify-center *:cursor-pointer"
          to={`/`}
        >
          <h1
            className={`text-4xl max-sm:text-2xl font-extrabold tracking-[15px] text-center`}
          >
            <span className={`${popup ? "text-black" : "text-white"}`}>
              SEVEN
            </span>
            <br />
            <span className={`${popup ? "text-black" : "text-white"}`}>G</span>
            <span className="text-orange-400">YM</span>
          </h1>
          <Dumble />
        </Link>
        {/* Sec 02 */}
        <div
          className={`flex items-center gap-8  *:font-bold *:hover:text-orange-400 *:transition-colors *:duration-200 *:cursor-pointer max-lg:hidden ${
            i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {links.map((e, i) => {
            const isActive =
              e.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(e.to);
            return (
              <Link
                to={e.to}
                className={`capitalize ${
                  isActive ? "text-orange-500" : "text-white"
                }`}
                key={i}
              >
                {t(e.name)}
              </Link>
            );
          })}
        </div>
        {/* sec 03 */}

        <div className="flex items-center justify-evenly gap-5 max-lg:hidden">
          <div className="flex items-center  justify-center gap-3">
            {/* svg for translate */}
            <Translate color={"white"} />
            <span className="bg-gray-500 w-[2px] h-[18px] rounded-full"></span>
          </div>
          <div className="flex items-center justify-center gap-3 *:cursor-pointer">
            {/* facebook svg */}
            <Link
              to={`https://www.facebook.com/profile.php?id=100091750982701`}
              target="_blank"
            >
              <Facebook color={"white"} />
            </Link>
            {/* insta svg */}
            <Insta color={"white"} />
            {/* x svg */}
            <X color={"white"} />
          </div>
        </div>

        {/* haburger icon  */}
        <HamburgerIcon control={() => setPopup((prev) => !prev)} />
      </header>

      {/* responsive design header */}

      {popup && (
        <div
          className="w-full h-screen fixed top-0 left-0 bg-black/30 z-[50] hidden max-lg:flex"
          dir="ltr"
        >
          <div
            className="w-[300px] max-sm:w-[200px] h-full bg-gray-100 px-8"
            ref={popupRef}
          >
            <div
              className="flex flex-col mt-32"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              {links.map((e, i) => {
                return (
                  <div className="mb-6" key={i}>
                    <Link
                      to={e.to}
                      className="font-bold text-black capitalize"
                      key={i}
                    >
                      {t(e.name)}
                    </Link>
                    <span className="block w-full h-[1px] bg-black"></span>
                  </div>
                );
              })}
              <div className="flex gap-3 items-center justify-center" dir="ltr">
                {/* facebook svg */}
                <Facebook color={"black"} />
                {/* insta svg */}
                <Insta color={"black"} />
                {/* x svg */}
                <X color={"black"} />
              </div>
              {/* HanDle Lang */}
              <div className="flex items-center justify-center mt-10">
                <Translate color={"black"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
