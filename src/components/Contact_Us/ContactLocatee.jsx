const ContactLocatee = ({ Locate, title }) => {
  return (
    <div className="flex items-center gap-5 mt-5">
      <div className="w-15 h-15 bg-gray-600 flex items-center justify-center rounded-full max-sm:w-12 max-sm:h-12">
        {Locate}
      </div>
      {/*  */}
      <div
        className="flex max-sm:flex-col max-sm:gap-3 items-center justify-center gap-5 max-sm:text-xs"
        dir="ltr"
      >
        {title}
      </div>
    </div>
  );
};

export default ContactLocatee;
