import React from "react";
import student_in_class from "../assests/student_in_class.png";
import black_boy_drinkwater from "../assests/black_boy_drinkwater.png";
import children_smiling from "../assests/children_smiling.png";
import Highlight_05 from "../assests/Highlight_05.png";

const NewsSection = () => {
  const newsData = [
    {
      category: "#Nutrition",
      title: "Healthy food and nutrition among all the children",
      description:
        "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
      date: "30 Dec, 2021",
      author: "Admin",
      image: student_in_class,
    },
    {
      category: "#Education",
      title: "New era for children learning and remove discrimination",
      description:
        "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
      date: "30 Dec, 2021",
      author: "Admin",
      image: black_boy_drinkwater,
    },
    {
      category: "#Water",
      title: "Ensure pure and mineral drinking water for rural people",
      description:
        "Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...",
      date: "30 Dec, 2021",
      author: "Admin",
      image: children_smiling,
    },
  ];

  return (
   
    <section id="news" className="w-full  max-md:h-auto   mb-20 max-md:mb-0 ">
      <div className="w-full h-3/4 bg-[#eef4f8] py-10">
        <div className="text-center mb-12">
          <h3 className="text-gray-500 text-lg">News</h3>
          <h2 className="text-4xl font-semibold text-gray-900 relative inline-block">
            In The <span className="relative z-10"> News</span>
            <span className="absolute right-0 bottom-1 w-[50%] h-3 bg-yellow-500 z-0"></span>
          </h2>
        </div>
 {/* Cards Section */}
 <div className="flex  max-md:p-3 flex-col md:flex-row w-full justify-center gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`bg-white max-md:w-full max-md:h-full  rounded-xl shadow-lg overflow-hidden w-[320px]  ${
              news.highlight ? "border-2 border-blue-500" : ""
            }`}
          >
            <img src={news.image} alt="News" className="w-full h-[200px] object-cover rounded-lg" />
            <div className="p-4">
              <span className={`text-sm text-red-500 font-bold ${news.tagColor}`}>#{news.category}</span>
              <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod...
              </p>
              <div className="flex justify-between text-gray-500 text-xs mt-4">
                <span>📅 {news.date}</span>
                <span>✍ {news.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>


      </div>

      
    </section>
  );
};

export default NewsSection;
