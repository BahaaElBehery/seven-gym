import React from "react";

const Location = ({ icon, items = [] }) => {
  return (
    <div className="flex items-center justify-center gap-5 flex-nowrap max-w-full">
      <div className="bg-orange-400 w-16 h-16 max-sm:w-14 max-sm:h-14  rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="text-sm max-sm:text-xs uppercase flex items-center gap-2 flex-wrap max-w-full">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="w-[1px] mx-2 h-3 bg-gray-500 inline-block"></span>
            )}
            <div>{item}</div> {/* بدل <p> بـ <div> علشان يدعم JSX بالكامل */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Location;
