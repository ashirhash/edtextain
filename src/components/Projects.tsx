import React from "react";
import book_with_pen_portrait from "../assets/book_with_pen_portrait.png";
import MOHOWO from "../assets/Mask group.png";
import impowegirl from "../assets/empowHER.png";
import MWEC from "../assets/MWEC.png";
import movingman from "../assets/maskgroup2.png";
import triangleShape from "../assets/triangle_shape.svg";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import projectsBlob from "../assets/projects_blob.png";
import people_in_front_of_laptop from "../assets/people_in_front_of_laptop.png";
import sonne from "../assets/sonne.png";
import treeShape from "../assets/tree_shape.png";

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
      "The Moving Women Empower Girls Initiative empowers young girls through mentorship, education, and skill-building to foster future changemakers.",
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
      <section id="project" className="mb-36 bg-white relative z-[1]">
        <img
          src={triangleShape}
          alt="triangle shape"
          className="absolute right-5 -z-[1]"
        />
        <img
          src={projectsBlob}
          alt="blob shape"
          className="absolute left-0 top-[80%] -z-[1]"
        />
        <div className="container">
          <SideShapeHeading headingClassName="max-xl:text-[44px] max-lg:text-4xl" className="mx-auto w-fit mb-11">
            Our Work: <YellowUnderlineHeading>Projects</YellowUnderlineHeading>
          </SideShapeHeading>
          <div className="bg-white border border-dark-navy rounded-xl p-11">
            <div className="w-3/4">
              <h3 className="text-2xl font-medium text-dark-navy mb-4">
                Moving Women Empowerment Network (MWEN)
              </h3>
              <p className="text-light-gray mb-10">
                MWEN (Moving Women Empowerment Network) Supporting the
                advancement of women by providing resources and support for them
                to succeed in their communities and professional lives.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-xl:items-start">
              <img
                src={book_with_pen_portrait}
                alt="MWEN Event"
                className="rounded-xl shadow-md"
              />
              <div className="flex flex-col gap-12 max-xl:gap-5">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 justify-between w-full"
                  >
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-2/5 rounded-lg border border-[#DFDBE1]"
                    />
                    <div>
                      <h4 className="text-lg max-xl:text-base max-xl:mb-2 font-semibold text-gray-800">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
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
      <section className="mb-28 bg-white ">
        <div className="container mx-auto relative z-[1] px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-16 h-[80%] flex flex-col justify-center border border-dark-navy border-r-0 bg-white rounded-l-xl drop-shadow-md shadow-lg">
            <div className="max-w-[440px] ">
              <h2 className="text-3xl font-medium text-gray-800 mb-3">
                Skills2Evolve (S2E)
              </h2>
              <p className="text-gray-600 text-lg">
                Digital training to empower young people and up-skill and
                re-skill adults with technical skills for a more sustainable
                future. A project in partnership with inicheativ GmbH.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-r-xl drop-shadow-md shadow-lg">
            <img
              src={people_in_front_of_laptop}
              alt="Skills2Evolve Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mb-36 bg-white ">
        <div className="container mx-auto relative z-[1] px-4 grid grid-cols-12 items-start">
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
          <div className="p-16 col-span-8 mt-7 py-10 flex flex-col justify-center border border-dark-navy border-l-0 bg-white rounded-r-xl drop-shadow-md shadow-lg">
            <div className="pb-6 mb-6 border-b border-[#B6C2C9]">
              <h2 className="text-3xl font-medium text-gray-800 mb-3">
                Sonne Kidz
              </h2>
              <p className="text-gray-600 text-lg">
                We provide children with a supportive and enriching program that
                celebrates their cultural heritage, fosters integration, and
                promotes holistic development.
              </p>
            </div>
            <div className="">
              <h2 className="text-3xl font-medium text-gray-800 mb-3">
                Sonne Magazine
              </h2>
              <p className="text-gray-600 text-lg">
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
