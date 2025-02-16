import React from "react";
import homeimg from '../assests/people_holding_books_with_bg.png'
import hand_price from '../assests/hand_price.png'
import join_our_Team from '../assests/join_our_Team.png'
import total_donations from '../assests/total_donations.png'
import banner_blob from '../assests/banner_blob.png'


const HomeSection = () => {
  return (
  <>
  <main className="w-full h-screen px-10 bg-[#eef4f8] flex justify-center items-center gap-2">
    <div className="w-1/2">
        <h1 className="text-6xl z-1 relative font-bold text-gray-900">
        <span className="relative z-10">Collective Action</span>

            <span className="absolute z-0 left-0 bottom-1 w-[53%] h-3 bg-[#fdc211] "></span>
        </h1>
        <h2 className="text-6xl text-gray-800 mt-2">
          For A Sustainable Tomorrow
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Working together towards an eco-friendly future, with renewable
          practices for long-term health and prosperity.
        </p>
        <button className="bg-red-500 hover:bg-white hover:text-red-500 hover:border-2 border-2 border-transparent hover:border-red-500 transition-all duration-300 text-white text-lg font-semibold px-6 py-3 rounded-lg mt-6">
          Donate now
        </button>
    
    </div>
    <div className="w-1/2 relative">
    <img src={homeimg} className="w-full" alt="" />
    <div className="absolute top-20  right-[16rem]">
      <img src={hand_price} alt="handpricelogo" />
    </div>
    <div >
      <img src={join_our_Team} className="absolute bottom-5 right-[32rem] w-1/3  "alt="" />
    </div>
    <div >
    <img src={total_donations} className="absolute bottom-14 right-[10rem] w-1/3  "alt="" />

    </div>

    </div>



  </main>

  </>
  )
};

export default HomeSection;
