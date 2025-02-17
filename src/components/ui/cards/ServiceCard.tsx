import React from "react";

const ServiceCard = ({ icon = "", title = "", desc = "" }) => {
  return (
    <div className="rounded-xl border border-[#B6C2C9] bg-white py-7 px-3">
      <img
        src={icon}
        alt="icon"
        width={64}
        height={64}
        className="mb-4 mx-auto"
      />
      <h3 className="text-dark-navy mb-3 text-2xl font-medium text-center mx-3 min-h-[70px] flex items-center justify-center">
        {title}
      </h3>
      <p className="text-light-gray text-lg leading-[1.7] text-center">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
