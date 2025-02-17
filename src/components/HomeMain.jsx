import React from "react";
import homeimg from "../assets/people_holding_books_with_bg.png";
import hand_price from "../assets/hand_price.png";
import join_our_Team from "../assets/join_our_Team.png";
import total_donations from "../assets/total_donations.png";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";

const HomeSection = () => {
  return (
    <>
      <section className="bg-[#eef4f8] relative z-[1] overflow-hidden">
        <img
          src="src/assets/banner_blob.png"
          alt="blob shape"
          className="absolute left-0 -top-24 -z-[1]"
        />
        <div className="container w-full flex items-center">
          <div className="w-[55%] pt-44 pb-36">
            <h1 className="text-[82px] z-1 relative leading-tight text-gray-900">
              <YellowUnderlineHeading className="font-bold" strokeClassName="bottom-4">Collective</YellowUnderlineHeading>
              <span className="font-bold"> Action</span>
              <span className="font-light"> For A Sustainable Tomorrow</span>
            </h1>
            <p className="text-gray-600 text-lg mt-5 w-[85%] mb-14">
              Working together towards an eco-friendly future, with renewable
              practices for long-term health and prosperity.
            </p>
            <button className="bg-tomato-red hover:bg-white hover:text-tombg-tomato-red border-[1px] border-transparent hover:border-tomato-red transition-all text-white hover:text-tomato-red text-lg font-medium px-7 py-3 rounded-[4px]">
              Donate now
            </button>
          </div>
          <div className="w-1/2">
            <div className="absolute bottom-0">
              <img src={homeimg} className="w-full" alt="" />
              <div className="absolute top-[5%] right-[40%]">
                <img src={hand_price} alt="handpricelogo" />
              </div>
              <img
                src={join_our_Team}
                className="absolute bottom-5 -left-[15%] w-1/3  "
                alt=""
              />
              <img
                src={total_donations}
                className="absolute bottom-14 right-[10rem] w-1/3  "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
