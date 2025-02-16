import React from 'react'
import people_in_front_of_laptop from '../assests/people_in_front_of_laptop.png'

const ProjectSect2 = () => {
  return (
    <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center   ">
          <div className="p-8 mr-20 ">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills2Evolve (S2E)</h2>
            <p className="text-gray-600">
              Digital training to empower young people and up-skill and re-skill adults with technical skills for a more sustainable future. A project in partnership with inicheativ GmbH.
            </p>
          </div>
          <div className="overflow-hidden rounded-r-xl">
            <img src={people_in_front_of_laptop} alt="Skills2Evolve Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>


   
    </>
  )
}

export default ProjectSect2