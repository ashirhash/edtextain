import React from "react";
import man_standing_on_rock from "../assets/man_standing_on_rock.png";
import people_making_star from "../assets/people_making_star.png";
import red_dots from "../assets/red_dots.png";
import red_highlights from "../assets/highlight-lines.svg";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";

const AboutSection = () => {
  return (
    <section id="about" className="mb-36 max-lg:mb-32 max-sm:mb-20">
      <div className="container flex flex-col gap-5 md:flex-row bg-white">
        <div className="md:w-1/2 relative flex flex-col items-center md:items-start">
          <img
            src={man_standing_on_rock}
            alt="man_standing_on_rock"
            className="rounded-lg shadow-lg max-lg:max-w-[400px] max-lg:mr-auto relative z-[1] object-cover w-4/5 max-xl:w-full ml-auto"
          />
          <img
            src={red_dots}
            className="absolute left-16 -bottom-3 max-sm:-bottom-5 max-sm:left-2 max-sm:w-16"
            alt="red_dots"
          />
          <div className="shadow-10-10-24-0-0.12 border-[12px] border-white absolute z-[1] w-72 max-lg:w-52 left-0 -top-[8rem] max-xl:top-[45%] max-lg:-top-5 max-sm:w-36">
            <img
              src={people_making_star}
              className="w-full object-cover "
              alt="people_making_star"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <p className="text-light-gray mb-5 max-sm:mb-3 text-2xl max-lg:text-xl max-sm:text-base relative w-fit">
            Welcome to edtextain
            <img
              src={red_highlights}
              alt="highlighting shape"
              className="absolute -top-7 -right-[70px] max-xl:w-[80px] object-contain"
            />
          </p>
          <h2 className="text-[44px] max-lg:text-4xl max-sm:text-3xl font-medium text-dark-navy mb-5 leading-snug">
            <YellowUnderlineHeading>Enabling people,</YellowUnderlineHeading>{" "}
            inspiring growth, supporting innovation
          </h2>
          <div className="lg:w-4/5">
            <p className="text-tomato-red font-medium mb-5 text-2xl max-sm:text-base max-lg:text-lg">
              We enable inter-cultural conversations.
            </p>
            <p className="text-light-gray text-lg max-lg:text-base leading-relaxed mb-4">
              Edtextain e.V. is a non-profit organization founded in 2014, in
              Munich, Germany. We support educational, technological, and
              professional advancement by providing essential tools, resources,
              and opportunities for people to thrive.
            </p>
            <p className="text-light-gray max-lg:text-base font-semibold mb-7">
              Join our community and empower your journey to success.
            </p>
          </div>
          <button className="bg-tomato-red hover:bg-white hover:text-tombg-tomato-red border-[1px] border-transparent hover:border-tomato-red transition-all text-white hover:text-tomato-red text-lg font-medium px-7 py-3 rounded-[4px] max-sm:text-sm">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
