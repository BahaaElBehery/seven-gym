import { useState } from "react";

const SimpleChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const complaintKeywords = [
    "مشكلة",
    "مشكله",
    "مش شغال",
    "ليه",
    "زعلان",
    "اتأخرت",
    "خدمة وحشة",
    "متضايق",
    "اتأذيت",
    "شكوى",
    "طلب",
    "مش عاجبني",
    "تأخير",
    "فلوس",
    "خصم",
    "المدرب",
    "مش لاقي",
    "مش واضح",
    "مش بيرد",
    "مش بنشتغل",
    "التطبيق بيهنج",
    "مش بيفتح",
    "مش بيسجل",
    "مش قادر احجز",
    "مش عارف ادخل",
    "المدرب مبيتعاونش",
    "معاملة وحشة",
    "الأجهزة بايظة",
    "المكان مش نضيف",
    "النت بيفصل",
    "المكيف بايظ",
    "في دوشة",
    "الساونا مقفولة",
    "الدش مش شغال",
    "اللوكر بايظ",
    "حد خد حاجتي",
    "الموظف مش محترم",
    "مش مرتاح",
    "في تأخير",
    "الفلوس اتخصمت",
    "مفيش رد",
    "الموقع وقع",
    "في عطل",
    "مش راضي يشتغل",
    "في مشكلة في الحجز",
    "عايز أشتكي",
    "حد ضايقني",
    "مش بيحترموا المواعيد",
    "الاشتراك اتلغى",
    "المدرب اتأخر",
    "الأمان مش موجود",
    "المواعيد مش مظبوطة",
    "الخدمة مش كويسة",
    "الاستقبال مش متعاون",
    "حسيت بإهانة",
    "اتخصم مني مرتين",
    "المبلغ مش رجع",
    "الكابتن مش مهتم",
    "مش بيردوا عليا",
    "مفيش نظام",
    "الناس مش محترمة",
    "محدش سمعني",
    "عايز ارجع الاشتراك",
    "مافيش اهتمام",
    "اشتراك غالي على الفاضي",
    "النظافة قليلة",
    "الكود مش شغال",
    "مش لاقي بياناتي",
    "عايز أكنسل",
    "مش عارف ألغي",
    "فيه خصم غلط",
    "مش حاسس بأمان",
    "في سرقة",
    "اتعاملت بقلة ذوق",
    "اتصبت",
    "اتعرضت لموقف سخيف",
    "في إزعاج",
    "اللبس مش مناسب",
    "مش بيساعدوني",
    "عايز أسترجع فلوسي",
    "فيه مشكلة تقنية",
    "الابلكيشن بطيء",
    "مش لاقي الجداول",
    "فيه خطأ ف السيستم",
    "الأجهزة قليلة",
    "العدد كبير أوي",
    "مش لاقي وقت فاضي",
    "الحجز كله مقفول",
    "الصفحة مش بتفتح",
    "اللينك مش شغال",
    "المكان زحمة",
    "مفيش تهوية",
    "حاسس بخطر",
    "فيه حد بيضايقني",
    "المدرب مش مركز معايا",
    "الكابتن بيتريق",
    "حد بيبصلي بطريقة وحشة",
    "مفيش احترام للخصوصية",
    "صوت عالي أوي",
    "الجو حر جدًا",
    "مافيش ترتيب",
    "حد خبطني",
  ];

  const isComplaint = (text) => {
    return complaintKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply;

    if (isComplaint(input)) {
      botReply = {
        sender: "bot",
        text: "نعتذر لك عن أي إزعاج، وسنقوم بمراجعة شكوتك في أقرب وقت.",
      };
    } else {
      botReply = {
        sender: "bot",
        text: "أنا مخصص فقط لاستقبال الشكاوى، من فضلك اكتب شكوتك.",
      };
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);
    setInput("");
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-start mt-10 gap-6 px-4"
      dir="ltr"
    >
      <div className="w-full md:w-[55%]">
        <img
          src="/Images/class-0.jpg"
          alt="Support"
          className="w-full h-[500px]  object-cover shadow rounded"
        />
      </div>

      <div className="w-full md:max-w-md p-4 border border-gray-500 rounded shadow">
        <h2 className="text-lg font-bold mb-4  text-orange-500">
          Technical Support
        </h2>
        <div className="h-[360px] max-sm:h-[300px] overflow-y-auto border border-gray-500 p-2 mb-4 rounded-2xl ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left text-blue-600"
              }`}
            >
              <span
                className={`inline-block p-2 max-sm:text-sm rounded ${
                  msg.sender === "user"
                    ? "bg-white text-black border border-gray-300"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-500 rounded p-2 font-bold text-lg"
            placeholder="اكتب شكوتك هنا......"
          />
          <button
            onClick={handleSend}
            className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleChat;
