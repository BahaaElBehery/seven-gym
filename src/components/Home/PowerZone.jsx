// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PowerZone = () => {
  const [hovered, setHovered] = useState(null);
  const { t, i18n } = useTranslation("");

  const members = [
    {
      id: 1,
      img: "/Images/persons/6678dcd2-d1a5-4bb0-90b4-131ed16ba46f.jpeg",
      name: "Ziad Ali Basha",
      role: t("powerzone.members.ziad.role"),
      title: t("powerzone.members.ziad.title"),
    },
    {
      id: 2,
      img: "/Images/persons/bahaa.jpeg",
      name: "Bahaa",
      role: t("powerzone.members.bahaa.role"),
      title: t("powerzone.members.bahaa.title"),
    },
    {
      id: 3,
      img: "/Images/persons/irvin.jpeg",
      name: "Irvin",
      role: t("powerzone.members.irvin.role"),
      title: t("powerzone.members.irvin.title"),
    },
    {
      id: 4,
      img: "/Images/persons/448e4eb9-34bd-4f44-a0c1-d4e85cf790aa.jpeg",
      name: "IrVin",
      role: t("powerzone.members.irvin2.role"),
      title: t("powerzone.members.irvin2.title"),
    },
    {
      id: 5,
      img: "/Images/persons/ziad.jpeg",
      name: "Ziad",
      role: t("powerzone.members.ziad2.role"),
      title: t("powerzone.members.ziad2.title"),
    },
    {
      id: 6,
      img: "/Images/persons/irv.jpeg",
      name: "IrVin",
      role: t("powerzone.members.irv.role"),
      title: t("powerzone.members.irv.title"),
    },
  ];

  return (
    <section
      className="text-white py-20 relative overflow-hidden bg-black"
      dir="ltr"
    >
      {/* glowing background circle */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl max-lg:text-3xl max-sm:text-2xl font-bold tracking-wide"
        >
          {t("powerzone.title1")}{" "}
          <span className="text-orange-500 max-sm:text-3xl">
            {t("powerzone.title2")}
          </span>{" "}
          {t("powerzone.title3")}
        </motion.h2>
        <p className="text-gray-400 mt-4 max-sm:text-sm">
          {t("powerzone.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto relative z-10">
        {members.map((member) => (
          <div key={member.id}>
            <motion.div
              onMouseEnter={() => setHovered(member.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() =>
                setHovered((prev) => (prev === member.id ? null : member.id))
              }
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[400px] object-cover bg-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-orange-500/30 transition-all duration-300" />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  hovered === member.id
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 text-lg font-semibold text-orange-400"
              >
                {member.name}
              </motion.div>
            </motion.div>

            {/* div اللي بيظهر تحت عند الـ hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                hovered === member.id
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.4 }}
              className={`bg-white text-black mt-3 p-4 flex flex-col gap-2 rounded-lg shadow-md overflow-hidden`}
              dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
            >
              <p className="text-lg max-sm:text-base font-semibold">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm max-sm:text-xs">
                {member.title}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerZone;
