import React from "react";
import homeimg from "../assets/people_holding_books_with_bg.png";
import hand_price from "../assets/hand_price.png";
import join_our_Team from "../assets/join_our_Team.png";
import total_donations from "../assets/total_donations.png";
import parallel_lines from "../assets/parallel_lines.png";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";

const HomeSection = () => {
  return (
    <>
      <section className="bg-[#eef4f8] relative z-[1] overflow-hidden max-lg:min-h-[600px]">
        <img
          src="src/assets/banner_blob.png"
          alt="blob shape"
          className="absolute left-0 -top-24 -z-[1]"
        />
        <img
          src="src/assets/parallel_lines.png"
          alt="blob shape"
          className="absolute right-0 -z-[1] w-2/4 max-lg:hidden"
        />
        <div className="container w-full flex max-lg:flex-col max-2xl:items-start items-center">
          <div className="w-[55%] max-lg:w-full pt-44 max-2xl:pt-32 max-lg:py-16 max-sm:py-10 pb-36">
            <div className="max-2xl:max-w-[600px] max-lg:w-full">
              <h1 className="text-[82px] max-2xl:text-6xl max-sm:text-4xl z-1 relative leading-tight text-gray-900">
                <YellowUnderlineHeading
                  className="font-bold"
                  strokeClassName="bottom-4"
                >
                  Collective
                </YellowUnderlineHeading>
                <span className="font-bold"> Action</span>
                <span className="font-light"> For A Sustainable Tomorrow</span>
              </h1>
              <p className="text-gray-600 text-lg max-sm:text-base mt-5 w-[85%] mb-14 max-md:mb-9">
                Working together towards an eco-friendly future, with renewable
                practices for long-term health and prosperity.
              </p>
              <button className="bg-tomato-red hover:bg-white hover:text-tombg-tomato-red border-[1px] border-transparent hover:border-tomato-red transition-all text-white hover:text-tomato-red text-lg font-medium px-7 py-3 rounded-[4px] max-sm:text-sm">
                Donate now
              </button>
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <div className="absolute w-fit max-lg:w-2/3 max-sm:max-w-[500px] max-sm:w-full max-lg:mx-auto max-lg:relative bottom-0">
              <img src={homeimg} className="w-full" alt="" />
              <div className="absolute top-[5%] right-[40%] w-12">
                <img src={hand_price} alt="handpricelogo" />
              </div>
              <img
                src={join_our_Team}
                className="absolute bottom-5 -left-[15%] max-sm:left-0 w-1/3 max-sm:w-2/5  "
                alt=""
              />
              <img
                src={total_donations}
                className="absolute bottom-14 right-[10rem] max-sm:right-0 max-sm:bottom-5 w-1/3  "
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
