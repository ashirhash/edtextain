import React from 'react'

import group_of_people_in_sunshine from '../assests/group_of_people_in_sunshine.png'
import gmail from '../assests/gmail.png'
import whatsapp from '../assests/whatsapp.png'



const Conatctsec = () => {
  return (
   <>
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${group_of_people_in_sunshine})` }}>
      <div className="bg-black bg-opacity-50 py-16">
        <div className="container mx-auto px-4 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">“Building Bridges: Embracing, Strengthening Communities”</h2>
              <p className="italic text-xl mb-4">- Celebrating excellence, Building Connections...</p>
              <p className="text-lg">We provide support for questions on jobs, trainings, language course, integration, family and general life in Germany.</p>
            </div>
            <div className="bg-white w-[70%] text-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">You can book an appointment online:</h3>
              <ul>
                <li className="flex items-center mb-2">
                  {/* <Mail className="h-5 w-5 text-red-600 mr-2" /> */}
                  <img className='mr-2'  src={gmail} alt="" />
                  <span>Email: <a href="mailto:hello@edtextain.com" className="text-blue-600 ml-2">hello@edtextain.com</a></span>
                </li>
                <li className="flex items-center mb-4">
                  {/* <Phone className="h-5 w-5 text-green-500 mr-2" /> */}
                  <img  className='mr-2' src={whatsapp} alt="" />
                  <span>WhatsApp: <a href="tel:+49151-234-3567" className="text-blue-600 ml-2">+49151-234-3567</a></span>
                </li>
              </ul>
              <h4 className="text-lg font-semibold mb-2">Office Hours:</h4>
              <ul className="text-sm">
                <li>Monday: Closed</li>
                <li>Tuesday: 12:00 – 17:00</li>
                <li>Wednesday: Closed</li>
                <li>Thursday – 12:00 – 17:00</li>
                <li>Friday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

   </>
  )
}

export default Conatctsec