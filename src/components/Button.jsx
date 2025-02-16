import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='px-2 font-title text-[14px] hover:bg-red-500 hover:text-white hover:border hover:border-white transition-all duration-300 py-1 border border-red-600 rounded-md'>{props.navbtn}</button>
    </>
  )
}

export default Button