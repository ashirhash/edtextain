import React from 'react'
import Headings from '../components/Headings'
import book_with_pen_portrait from '../assests/book_with_pen_portrait.png'
import MOHOWO from '../assests/Mask group.png'
import impowegirl from '../assests/empowHER.png'
import MWEC from '../assests/MWEC.png'
import movingman from '../assests/maskgroup2.png'



const Projectmain = () => {
    
const projects = [
    {
      name: 'MOWOWO',
      description: 'Helping women to build careers through coaching and information sharing.',
      logo: MOHOWO
    },
    {
      name: 'EmpowHer Girls',
      description: 'The Moving Women Empower Girls Initiative empowers young girls through mentorship, education, and skill-building to foster future changemakers.',
      logo: impowegirl
    },
    {
      name: 'Moving Women Empowerment Conference',
      description: 'An event to connect with the sisterhood.',
      logo:MWEC
    },
    {
      name: 'Moving Woman Magazine',
      description: 'Showcasing and providing insights into women’s issues.',
      logo: movingman
    }
  ];
  return (
    <>
    <section id='project' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Headings head="Our Work: Projects" />

        <div className="bg-white border border-gray-600 mt-10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Moving Women Empowerment Network (MWEN)</h3>
          <p className="text-gray-600 mb-6">
            MWEN (Moving Women Empowerment Network) Supporting the advancement of women by providing resources and support for them to succeed in their communities and professional lives.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img src={book_with_pen_portrait} alt="MWEN Event" className="rounded-xl shadow-md" />
            <div>
              {projects.map((project, index) => (
                <div key={index} className="flex items-start  gap-4 justify-between w-full mb-4">
                  <img src={project.logo} alt={project.name} className="w-[33%]" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default Projectmain