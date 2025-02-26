import React from "react";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import {
  banner_blob,
  hand_price,
  homeimg,
  join_our_Team,
  parallel_lines,
  total_donations,
} from "../assets";
import ButtonSolid from "./ui/buttons/ButtonSolid";

const HomeSection = () => {
  return (
    <>
      <section className="bg-[#eef4f8] relative z-[1] overflow-hidden">
        <img
          src={banner_blob}
          alt="blob shape"
          className="absolute left-0 -top-24 -z-[1]"
        />
        <img
          src={parallel_lines}
          alt="blob shape"
          className="absolute right-0 -z-[1] w-2/4 max-lg:hidden"
        />
        <div className="container w-full flex max-lg:flex-col max-2xl:items-start items-center">
          <div className="w-[55%] max-lg:w-full pt-44 max-2xl:pt-32 max-2xl:pb-24 max-xl:pt-20 max-xl:pb-20 max-lg:pt-12 max-lg:pb-5 max-sm:py-10 pb-36">
            <div className="max-2xl:max-w-[600px] max-lg:w-full">
              <h1 className="text-[82px] max-2xl:text-6xl max-xl:text-[42px] max-sm:text-4xl z-1 relative leading-[1.1] text-dark-navy">
                <YellowUnderlineHeading
                  className="font-bold"
                  strokeClassName="bottom-4"
                >
                  Collective
                </YellowUnderlineHeading>
                <span className="font-bold"> Action</span>
                <span className="font-light"> For A Sustainable Tomorrow</span>
              </h1>
              <p className="text-light-gray text-lg max-xl:text-base mt-5 w-[85%] mb-14 max-2xl:mb-10 max-md:mb-9">
                Working together towards an eco-friendly future, with renewable
                practices for long-term health and prosperity.
              </p>
              <ButtonSolid/>
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <div className="absolute w-fit max-lg:w-7/12 max-sm:max-w-[500px] max-sm:w-full max-lg:mx-auto max-lg:relative bottom-0">
              <img src={homeimg} className="w-full max-xl:w-11/12" alt="" />
              <div className="absolute top-[5%] right-[40%] w-16 max-xl:w-12">
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
