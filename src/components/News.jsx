import React from "react";
import student_in_class from "../assets/student_in_class.png";
import black_boy_drinkwater from "../assets/black_boy_drinkwater.png";
import children_smiling from "../assets/children_smiling.png";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import NewsCard from "./ui/cards/NewsCard";

const newsData = [
  {
    category: "Nutrition",
    title: "Healthy food and nutrition among all the children",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
    date: "30 Dec, 2021",
    author: "Admin",
    image: student_in_class,
  },
  {
    category: "Education",
    title: "New era for children learning and remove discrimination",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
    date: "30 Dec, 2021",
    author: "Admin",
    image: black_boy_drinkwater,
  },
  {
    category: "Water",
    title: "Ensure pure and mineral drinking water for rural people",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
    date: "30 Dec, 2021",
    author: "Admin",
    image: children_smiling,
  },
];
const NewsSection = () => {
  return (
    <section
      id="news"
      className="pt-32 pb-36 max-lg:py-28 max-md:py-20 relative after:absolute after:w-full after:h-3/4 max-lg:after:h-full after:top-0 after:left-0 after:bg-[#EEF4F8] z-0 after:-z-[1]"
    >
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-light-gray text-2xl block mb-1 max-lg:text-xl max-sm:text-lg">News</span>
          <h2 className="text-4xl text-dark-navy relative inline-block">
            <SideShapeHeading headingClassName="font-medium max-md:text-4xl">
              In The <YellowUnderlineHeading>News</YellowUnderlineHeading>
            </SideShapeHeading>
          </h2>
        </div>
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {newsData.map((news, index) => (
            <NewsCard
            key={index}
              image={news.image}
              tagColor={news.tagColor}
              category={news.category}
              title={news.title}
              date={news.date}
              author={news.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
