import React from "react";
import {
  AKPM,
  empow,
  katho,
  migrations,
  munchen,
  petra,
  sonneBrand,
} from "../assets";

const clients = [AKPM, katho, empow, migrations, munchen, sonneBrand, petra];

const Marquee = () => {
  return (
    <section className="px-5">
      <div className="container px-10 rounded-lg py-20 max-lg:py-10 shadow-4-6-24-0-0.08">
        <ul className="flex gap-14 flex-wrap justify-center items-center">
          {clients.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="client"
              className="object-contain"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
