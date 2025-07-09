import { useTranslation } from "react-i18next";

const schedule = {
  "1.30pm - 5.00pm": {
    Monday: { title: "WEIGHT LOOSE", trainer: "Bahaa El Behery" },
    Tuesday: { title: "CARDIO", trainer: "Bahaa El Behery" },

    Thursday: { title: "FITNESS", trainer: "Bahaa El Behery" },

    Sunday: { title: "BODY BUILDING", trainer: "Bahaa El Behery" },
  },
  "6.00pm - 7.00pm": {
    Tuesday: { title: "FITNESS", trainer: "Bahaa El Behery" },
    Wednesday: { title: "WEIGHT LOOSE", trainer: "Bahaa El Behery" },
    Thursday: { title: "CARDIO", trainer: "Bahaa El Behery" },

    Sunday: { title: "FITNESS", trainer: "Bahaa El Behery" },
  },
  "7.00pm - 10.00pm": {},
  "7.00pm - 9.00pm": {
    Saturday: { title: "CARDIO", trainer: "Bahaa El Behery" },
    Monday: { title: "CARDIO", trainer: "Bahaa El Behery" },
    Sunday: { title: "WEIGHT LOOSE", trainer: "Bahaa El Behery" },
  },
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function GymSchedule() {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto w-11/12 mx-auto mt-20">
      <table className="min-w-[800px] w-full border-collapse text-white text-center">
        <thead>
          <tr>
            <th className="p-4 border border-gray-800 bg-black/80 text-sm md:text-base">
              {t("Time")}
            </th>
            {days.map((day) => (
              <th key={day} className="bg-orange-600 p-4">
                {t(day)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(schedule).map(([time, sessions]) => (
            <tr key={time}>
              <td className=" text-orange-500 font-bold text-center border border-gray-700 text-sm px-4">
                {t(time)}
              </td>
              {days.map((day) => {
                const session = sessions[day];
                return (
                  <td
                    key={day}
                    className="p-8 border border-gray-800 bg-black/80"
                  >
                    {session ? (
                      <>
                        <div className="font-bold uppercase">
                          {t(session.title)}
                        </div>
                        <div className="text-xs text-gray-400 ">
                          {t(session.trainer)}
                        </div>
                      </>
                    ) : (
                      <div className="text-gray-700">___</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
