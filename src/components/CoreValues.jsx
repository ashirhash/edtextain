import React from "react";
import groupLines from "../assets/GroupLines.png";
import openBook from "../assets/open_book.svg";
import handsPeople from "../assets/hands_people.svg";
import fourHands from "../assets/four_hands.svg";
import peopleContact from "../assets/people_contact.svg";

const values = [
  {
    icon: openBook,
    title: "Embracing Outcomes",
    bgColor: "bg-blue-100",
  },
  {
    icon: handsPeople,
    title: "Strengthening Communities",
    bgColor: "bg-yellow-100",
  },
  {
    icon: fourHands,
    title: "Celebrating Diversity",
    bgColor: "bg-indigo-100",
  },
  {
    icon: peopleContact,
    title: "Building Connections",
    bgColor: "bg-teal-100",
  },
];

const CoreValues = () => {
  return (
    <section className="pt-32 pb-64">
      <div className="container relative grid grid-cols-4 justify-center gap-7">
        {values.map((value, index) => (
          <div
            key={index}
            className={`relative group z-[1] p-6 pb-14 rounded-lg shadow-lg text-left ${value.bgColor}`}
          >
            <div
              className="-mt-20 mx-auto drop-shadow-md shadow-lg
 bg-white w-[120px] h-[120px] flex justify-center items-center p-6 rounded-full"
            >
              <img
                src={value.icon}
                alt="icon"
                width={54}
                height={54}
                className="object-contain group-hover:-rotate-12 transition-all group-hover:scale-125 will-change-transform"
              />
            </div>
            <p className="mt-12 leading-tight text-3xl font-medium text-dark-navy">
              {value.title}
            </p>
            <img
              src={groupLines}
              alt="grouplines"
              className="w-24 h-24 absolute right-0 bottom-0 -z-[1] group-hover:-translate-y-10 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
