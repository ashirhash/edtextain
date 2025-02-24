import React from "react";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import {
  book_with_pen_portrait,
  impowegirl,
  MOHOWO,
  movingman,
  MWEC,
  people_in_front_of_laptop,
  projectsBlob,
  sonne,
  treeShape,
  triangleShape,
} from "../assets";

const projects = [
  {
    name: "MOWOWO",
    description:
      "Helping women to build careers through coaching and information sharing.",
    logo: MOHOWO,
  },
  {
    name: "EmpowHer Girls",
    description:
      "Empowers young girls through mentorship, education, and skill-building.",
    logo: impowegirl,
  },
  {
    name: "Moving Women Empowerment Conference",
    description: "An event to connect with the sisterhood.",
    logo: MWEC,
  },
  {
    name: "Moving Woman Magazine",
    description: "Showcasing and providing insights into women’s issues.",
    logo: movingman,
  },
];
const Projects = () => {
  return (
    <>
      <section
        id="project"
        className="mb-36 max-lg:mb-20 max-sm:mb-16 bg-white relative z-[1]"
      >
        <img
          src={triangleShape}
          alt="triangle shape"
          className="absolute right-5 -z-[1] max-sm:top-14 max-lg:w-[140px]"
        />
        <img
          src={projectsBlob}
          alt="blob shape"
          className="absolute left-0 top-[80%] -z-[1] "
        />
        <div className="container 2xl:max-w-[1450px]">
          <SideShapeHeading
            headingClassName="max-2xl:text-[44px] max-lg:text-4xl max-lg:max-w-"
            className="mx-auto w-fit mb-12 max-lg:max-w-[80%] max-lg:text-center font-medium"
          >
            Our Work:{" "}
            <YellowUnderlineHeading className="max-sm:block">
              Projects
            </YellowUnderlineHeading>
          </SideShapeHeading>
          <div className="bg-white border border-dark-navy rounded-xl p-11 max-sm:p-7">
            <div className="lg:w-4/5">
              <h3 className="text-3xl max-2xl:text-2xl max-sm:text-xl font-medium text-dark-navy mb-4">
                Moving Women Empowerment Network (MWEN)
              </h3>
              <p className="text-light-gray mb-10 text-lg max-2xl:text-base max-sm:text-sm">
                MWEN (Moving Women Empowerment Network) Supporting the
                advancement of women by providing resources and support for them
                to succeed in their communities and professional lives.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-xl:items-start">
              <img
                src={book_with_pen_portrait}
                alt="MWEN Event"
                className="rounded-xl shadow-md w-full max-lg:max-w-[600px]"
              />
              <div className="flex flex-col gap-12 max-xl:gap-5 max-lg:w-[70%] max-md:w-full">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex max-sm:flex-col items-start gap-4 justify-between w-full"
                  >
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-2/5 max-2xl:w-1/3 max-sm:w-2/4 rounded-lg border border-[#DFDBE1] "
                    />
                    <div>
                      <h4 className="text-2xl max-2xl:text-xl max-lg:text-lg max-xl:mb-2 font-medium text-dark-navy">
                        {project.name}
                      </h4>
                      <p className="text-light-gray text-base max-sm:text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-28 max-lg:mb-20 max-sm:mb-16 bg-white ">
        <div className="container 2xl:max-w-[1450px] mx-auto relative z-[1] px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-16 max-sm:px-7 h-[80%] flex flex-col justify-center border border-dark-navy lg:border-r-0 bg-white rounded-l-xl  max-lg:rounded-xl drop-shadow-md shadow-lg">
            <div className="lg:max-w-[440px] ">
              <h2 className="text-3xl max-2xl:text-[26px] max-lg:text-2xl max-sm:text-xl font-medium text-dark-navy mb-3">
                Skills2Evolve (S2E)
              </h2>
              <p className="text-light-gray text-lg 2xl:leading-[1.8] max-2xl:text-base max-sm:text-sm">
                Digital training to empower young people and up-skill and
                re-skill adults with technical skills for a more sustainable
                future. A project in partnership with inicheativ GmbH.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-r-xl max-lg:max-w-[600px] max-lg:rounded-xl drop-shadow-md shadow-lg">
            <img
              src={people_in_front_of_laptop}
              alt="Skills2Evolve Team"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
      <section className="mb-36 max-lg:mb bg-white ">
        <div className="container 2xl:max-w-[1450px] mx-auto relative z-[1] px-4 grid max-lg:flex max-lg:flex-col-reverse grid-cols-12 items-start ">
          <img
            src={treeShape}
            alt="tree shape"
            className="bottom-1/4 -left-[50px] absolute"
          />
          <div className="overflow-hidden col-span-4">
            <img
              src={sonne}
              alt="Skills2Evolve Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-16 col-span-8 mt-7 py-10 max-sm:px-7 max-sm:py-7 flex flex-col justify-center border border-dark-navy lg:border-l-0 bg-white rounded-r-xl max-lg:mb-5 max-lg:rounded-lg drop-shadow-md shadow-lg">
            <div className="pb-6 mb-6 border-b border-[#B6C2C9]">
              <h2 className="text-3xl max-2xl:text-[26px] max-lg:text-2xl max-sm:text-xl font-medium text-dark-navy mb-3">
                Sonne Kidz
              </h2>
              <p className="text-light-gray 2xl:leading-[1.8] text-lg max-2xl:text-base max-sm:text-sm">
                We provide children with a supportive and enriching program that
                celebrates their cultural heritage, fosters integration, and
                promotes holistic development.
              </p>
            </div>
            <div className="">
              <h2 className="text-3xl max-2xl:text-[26px] max-lg:text-2xl max-sm:text-xl font-medium text-dark-navy mb-3">
                Sonne Magazine
              </h2>
              <p className="text-light-gray 2xl:leading-[1.8] text-lg max-2xl:text-base max-sm:text-sm">
                Celebrates creativity and diversity by exploring the
                intersection of lifestyle, culture, and innovation. We provide a
                platform that offers insightful perspectives on fashion, art,
                travel, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
