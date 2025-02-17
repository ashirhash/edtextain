import React from "react";
import katho from "../assets/katholischer.png";
import AKPM from "../assets/AKPM.png";
import empow from "../assets/empowHER.png";
import migrations from "../assets/migrations.png";
import munchen from "../assets/munchen.png";
import sonneBrand from "../assets/sonne_brand.png";
import petra from "../assets/petra_kelly.png";

const clients = [AKPM, katho, empow, migrations, munchen, sonneBrand, petra];

const Marquee = () => {
  return (
    <section className="px-5">
      <div className="container px-10 rounded-lg py-20 max-lg:py-10 shadow-4-6-24-0-0.08">
        <ul className="flex gap-14 flex-wrap justify-center items-center">
          {clients.map((item, index) => (
            <img key={index} src={item} alt="client" className="object-contain" />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
