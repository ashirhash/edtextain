import React from "react";
import group_of_people_in_sunshine from "../assets/group_of_people_in_sunshine.png";
import gmail from "../assets/gmail.png";
import whatsapp from "../assets/whatsapp.png";

const Appointment = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat mb-36"
        style={{ backgroundImage: `url(${group_of_people_in_sunshine})` }}
      >
        <div className=" bg-black bg-opacity-60">
          <div className="container relative py-16 grid grid-cols-10 gap-12 items-center">
            <div className="col-span-6">
              <h2 className="text-[44px] font-medium leading-snug mb-7 text-white">
                “Building Bridges: Embracing, Strengthening Communities”
              </h2>
              <p className="text-2xl mb-7 text-white">
                - Celebrating excellence, Building Connections...
              </p>
              <p className="text-2xl text-white">
                We provide support for questions on jobs, trainings, language
                course, integration, family and general life in Germany.
              </p>
            </div>
            <div
              className="bg-white col-start-8 col-span-3 text-gray-800 rounded-xl drop-shadow-md shadow-lg
 p-6 absolute -bottom-7 right-0"
            >
              <h3 className="text-[17px] font-semibold text-red-600 mb-5">
                You can book an appointment online:
              </h3>
              <ul className="flex flex-col gap-6 mb-7">
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
              <h4 className="text-lg font-semibold mb-2">Office Hours:</h4>
              <ul className="text-lg flex flex-col gap-[2px]">
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
