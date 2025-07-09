import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import About_Us from "./Pages/About_Us";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Classes_Detail from "./Pages/Classes_Detail";
import Services from "./Pages/Services";
import Contact_Us from "./Pages/Contact_Us";
import Location_Section from "./components/Home/Location_Section";
import Error from "./Pages/Error";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.style.fontFamily = "Cairo, sans-serif";
      document.body.style.direction = "rtl";
    } else {
      document.body.style.fontFamily = "Roboto, sans-serif";
      document.body.style.direction = "ltr";
    }
  }, [i18n.language]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About_Us />} />
        <Route path="classes_detail" element={<Classes_Detail />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact_Us />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Location_Section />
      <Footer />
    </>
  );
}

export default App;
