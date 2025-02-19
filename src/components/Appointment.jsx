import React from "react";
import { gmail, group_of_people_in_sunshine, whatsapp } from "../assets";


const Appointment = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat mb-36 max-lg:mb-24"
        style={{ backgroundImage: `url(${group_of_people_in_sunshine})` }}
      >
        <div className=" bg-black bg-opacity-60">
          <div className="container relative py-16 grid grid-cols-10 gap-12 max-lg:items-start max-lg:flex max-lg:flex-col max-lg items-center">
            <div className="col-span-6 max-lg:w-3/4 max-sm:w-full">
              <h2 className="text-[44px] max-2xl:text-4xl max-lg:text-3xl max-sm:text-2xl font-medium leading-snug mb-7 max-xl:mb-5 text-white">
                “Building Bridges: Embracing, Strengthening Communities”
              </h2>
              <p className="text-2xl max-2xl:text-xl max-lg:text-base max-sm:text-sm mb-7 max-xl:mb-5 text-white">
                - Celebrating excellence, Building Connections...
              </p>
              <p className="text-2xl max-2xl:text-xl max-lg:text-base max-sm:text-sm text-white">
                We provide support for questions on jobs, trainings, language
                course, integration, family and general life in Germany.
              </p>
            </div>
            <div
              className="bg-white col-start-8 col-span-6 max-lg:col-span-2 max-xl:w-fit max-xl:col-span-4 max-xl:col-start-7 text-gray-800 rounded-xl drop-shadow-md shadow-lg
 p-6 absolute -bottom-7 max-2xl:-bottom-16 max-xl:-bottom-10 right-0 max-lg:static"
            >
              <h3 className="text-[17px] max-sm:text-base font-semibold text-red-600 mb-5">
                You can book an appointment online:
              </h3>
              <ul className="flex flex-col gap-6 mb-7 max-xl:mb-5">
                <li className="flex gap-2 items-center">
                  <img src={gmail} alt="gmail" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:hello@edtextain.com"
                      className="text-dark-navy font-semibold"
                    >
                      hello@edtextain.com
                    </a>
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <img src={whatsapp} alt="whatsapp" />
                  <span>
                    WhatsApp:{" "}
                    <a
                      href="tel:+49151-234-3567"
                      className="text-dark-navy font-semibold"
                    >
                      +49151-234-3567
                    </a>
                  </span>
                </li>
              </ul>
              <h4 className="text-lg max-xl:text-base font-semibold mb-2">
                Office Hours:
              </h4>
              <ul className="text-lg max-2xl:text-base flex flex-col gap-[2px]">
                <li>Monday: Closed</li>
                <li>Tuesday: 12:00 - 17:00</li>
                <li>Wednesday: Closed</li>
                <li>Thursday - 12:00 - 17:00</li>
                <li>Friday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
