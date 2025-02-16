import React from 'react';
import Headings from '../components/Headings'
import Highlight_05 from '../assests/Highlight_05.png'

const services = [
  {
    title: 'Education and skills development',
    description: 'Sometimes finding the right educational path and skill to pursue is a challenge especially in a new country. We offer job and skills training to ensure you get into professions that will create a sustainable future for all. We also do offer supporting for CV development, job search training and processes to get you into your desired profession.',
    icon: '📘'
  },
  {
    title: 'Counseling on migration',
    description: 'We offer individual as well as group counselling sessions on migration laws, updates and information on various topics on migration and the many possibilities in Germany. We work together with partners who provide migration services or information that help in the migration process (like helping to find lawyers or organizations that support migrants and refugees, etc.)',
    icon: '🧭'
  },
  {
    title: 'Integration support',
    description: 'Having to go through processes alone can be overwhelming and some of our volunteers have had firsthand experiences on the challenges migrants face. We also help with topics like parenting, the school system in Germany, entrepreneurship, etc.',
    icon: '🔗'
  },
  {
    title: 'Intercultural communication',
    description: 'Workers in the social and refugee space as well as migrants and refugees do sometimes meet challenges working with each other. Misunderstandings arise quickly when communication is lost in transition. With our experts with strong experience in intercultural communication competencies, we offer trainings for migrant and social workers as well as migrants and refugees.',
    icon: '🎯'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-4 text-center">
      <img src={Highlight_05} className='absolute max-sm:left-[5rem] max-md:left-[9rem]  top-10 left-[32rem]'  alt="Highlight_05" />

<h1 className='text-5xl font-semibold m-2 text-gray-900  capitalize'>services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;