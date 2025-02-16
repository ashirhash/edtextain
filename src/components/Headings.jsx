import React from 'react'
import Highlight_05 from '../assests/Highlight_05.png'
const Headings = (props) => {
  return (
    <>
    <div className='w-full relative  text-center'>
        <img src={Highlight_05} className='absolute  -top-6 left-[22rem]'  alt="Highlight_05" />
        <h1 className='text-5xl font-semibold m-2 text-gray-900 '>{props.head}</h1>
    </div>
    </>
  )
}

export default Headings