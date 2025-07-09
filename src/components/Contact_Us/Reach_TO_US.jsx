import Get_In_Touch from "./Get_In_Touch";
import ContactForm from "./ContactForm";

const Reach_TO_US = () => {
  return (
    <div
      className="w-11/12 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-20"
      dir="ltr"
    >
      <Get_In_Touch />
      <ContactForm />
    </div>
  );
};

export default Reach_TO_US;
