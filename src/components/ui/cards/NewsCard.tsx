import React from "react";
import { calender, contacts } from "../../../assets";

const NewsCard = ({ image, tagColor, category, title, date, author }) => {
  return (
    <div className={`bg-white shadow-lg overflow-hidden rounded-lg`}>
      <img
        src={image}
        alt="News"
        className="w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <span
          className={`text-sm text-tomato-red font-medium mb-3 ${tagColor}`}
        >
          #{category}
        </span>
        <h3 className="text-2xl max-sm:text-xl font-medium text-dark-navy mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-5 pb-5 border-b border-[#DDD]">
          Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do
          eiusmod...
        </p>
        <div className="grid grid-cols-2 justify-between text-gray-500 text-xs mt-4">
          <div className="flex gap-2 border-r border-[#DDD]">
            <span className="block w-9 h-9 rounded-full p-[10px] bg-[#FDF0DD]">
              <img
                src={calender}
                alt="calender icon"
                width={36}
                height={36}
                className=" "
              />{" "}
            </span>
            <div className="">
              <span className="font-medium text-base block text-dark-navy max-sm:text-sm">Date:</span>
              <span className="text-sm block text-light-gray">{date}</span>
            </div>
          </div>
          <div className="flex gap-2 ml-6">
            <span className="block w-9 h-9 rounded-full p-[10px] bg-[#FDF0DD]">
              <img
                src={contacts}
                alt="calender icon"
                width={36}
                height={36}
                className=" "
              />{" "}
            </span>
            <div className="">
              <span className="font-medium text-base block text-dark-navy max-sm:text-sm">By:</span>
              <span className="text-sm block text-light-gray">{author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
