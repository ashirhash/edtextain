import React from "react";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import ServiceCard from "./ui/cards/ServiceCard";
import people_globe from "../assets/book_bulb.svg";
import book_bulb from "../assets/book_bulb.svg";
import file_flowchart from "../assets/book_bulb.svg";
import target_arrow from "../assets/book_bulb.svg";
import rings_shape from "../assets/rings-shape.png";

const services = [
  {
    title: "Education and skills development",
    desc: "Sometimes finding the right educational path and skill to pursue is a challenge especially in a new country. We offer job and skills training to ensure you get into professions that will create a sustainable future for all. We also do offer supporting for CV development, job search training and processes to get you into your desired profession.",
    icon: book_bulb,
  },
  {
    title: "Counseling on migration",
    desc: "We offer individual as well as group counselling sessions on migration laws, updates and information on various topics on migration and the many possibilities in Germany. We work together with partners who provide migration services or information that help in the migration process (like helping to find lawyers or organizations that support migrants and refugees, etc.)",
    icon: people_globe,
  },
  {
    title: "Integration support",
    desc: "Having to go through processes alone can be overwhelming and some of our volunteers have had firsthand experiences on the challenges migrants face. We also help with topics like parenting, the school system in Germany, entrepreneurship, etc.",
    icon: file_flowchart,
  },
  {
    title: "Intercultural communication",
    desc: "Workers in the social and refugee space as well as migrants and refugees do sometimes meet challenges working with each other. Misunderstandings arise quickly when communication is lost in transition. With our experts with strong experience in intercultural communication competencies, we offer trainings for migrant and social workers as well as migrants and refugees.",
    icon: target_arrow,
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-28 pt-36 relative -z-[1] overflow-hidden">
      <img src={rings_shape} alt="rings shape" className="absolute rotate-12 -bottom-32 right-0 -z-[1]" />
      <div className="container">
        <SideShapeHeading className="w-fit mx-auto mb-12">
          <YellowUnderlineHeading>Services</YellowUnderlineHeading>
        </SideShapeHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              icon={service.icon}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
