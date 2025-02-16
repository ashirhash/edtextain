import React from "react";
import man_standing_on_rock from '../assests/man_standing_on_rock.png'
import people_making_star from '../assests/people_making_star.png'
import red_dots from '../assests/red_dots.png'

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col mb-20 md:flex-row items-center px-6 md:px-16 lg:px-24 py-12 bg-white">
      {/* Left Image Section */}
      <div className="md:w-1/2 relative flex flex-col items-center md:items-start space-y-4">
        <img
          src={man_standing_on_rock}
          alt="man_standing_on_rock"
          className="rounded-lg shadow-lg absolute  z-20 right-4 -top-[10rem] w-[70%] max-w-md"
        />
       <img src={red_dots} className="absolute left-20  top-[8rem]" alt="red_dots" />
       <img src={people_making_star} className="absolute z-30  w-1/3 left-10 -top-[13rem]" alt="people_making_star" />
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <p className="text-gray-500">Welcome to edtextain</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-black">Enabling people,</span>
          <span className="text-yellow-500"> inspiring growth, supporting innovation</span>
        </h1>
        <p className="text-red-600 font-semibold mt-4">
          We enable inter-cultural conversations.
        </p>
        <p className="text-gray-600 mt-4 max-w-lg">
          Edtextain e.V. is a non-profit organization founded in 2014, in Munich, Germany. We support educational, technological, and professional advancement by providing essential tools, resources, and opportunities for people to thrive.
        </p>
        <p className="text-gray-800 font-semibold mt-4">
          Join our community and empower your journey to success.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
