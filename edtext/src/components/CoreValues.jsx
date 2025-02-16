import React from "react";
import groupLines from '../assests/GroupLines.png'
import { FaBookOpen, FaUsers, FaHandshake, FaNetworkWired } from "react-icons/fa";

const values = [
  {
    icon: <FaBookOpen className="text-3xl text-gray-700" />, 
    title: "Embracing Outcomes", 
    bgColor: "bg-blue-100",
    bgImg:groupLines
  },
  {
    icon: <FaUsers className="text-3xl text-gray-700" />, 
    title: "Strengthening Communities", 
    bgColor: "bg-yellow-100",
    bgImg:groupLines

  },
  {
    icon: <FaHandshake className="text-3xl text-gray-700" />, 
    title: "Celebrating Diversity", 
    bgColor: "bg-indigo-100",
    bgImg:groupLines

  },
  {
    icon: <FaNetworkWired className="text-3xl text-gray-700" />, 
    title: "Building Connections", 
    bgColor: "bg-teal-100",
    bgImg:groupLines

  }
];

const CoreValues = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="flex flex-col relative md:flex-row justify-center items-center gap-6">
        {values.map((value, index) => (
          <div key={index} className={`relative ${value.bgColor} p-4 rounded-lg shadow-lg w-64 text-left`}>
            <div className="absolute -top-6 left-1/2 transform shadow-gray-300 -translate-x-1/2 bg-white p-6 rounded-full shadow-lg">
              {value.icon}
            </div>
            <p className="mt-10 font-semibold text-[1.5rem] text-gray-800">{value.title}</p>
            <img src={groupLines} alt="grouplines" className="w-1/3 ml-36  mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
