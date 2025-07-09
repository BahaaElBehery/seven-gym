import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { i18n } = useTranslation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.length > 15) {
      newErrors.name = "Please Enter A 15 Count";
    }

    // التحقق من العمر (رقمين فقط)
    const ageRegex = /^\d{2}$/;
    if (!ageRegex.test(age)) {
      newErrors.age = "Age Must be a 2 Digit Number";
    }

    // لو فيه أخطاء، نحدث الحالة ونوقف الإرسال
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // مسح الأخطاء السابقة
    setErrors({});

    // إرسال واتساب
    const message = `الاسم: ${name}\nالعمر: ${age}\nالرسالة: ${comment}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "01033022733";
    const whatsappURL = `https://wa.me/2${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex items-center max-sm:flex-col justify-between gap-5">
        <div className="w-[50%] max-sm:w-full">
          <input
            type="text"
            className="border border-gray-600 w-full px-4 py-2 outline-none"
            placeholder={i18n.language === "ar" ? "الاسم" : "Name"}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="w-[50%] max-sm:w-full">
          <input
            type="text"
            className="border border-gray-600 w-full px-4 py-2 outline-none"
            placeholder={i18n.language === "ar" ? "العمر" : "Age"}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>
      </div>

      <textarea
        name="comment"
        id="comment"
        placeholder={i18n.language === "ar" ? "اكتب تعليقا" : "Comment"}
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="border border-gray-600 outline-none max-h-[200px] h-full p-5"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-orange-500 py-3 text-white font-bold rounded hover:bg-orange-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
