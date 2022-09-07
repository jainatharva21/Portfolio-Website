import React from 'react'
import { socialMedia } from '../constants'

const footer = () => {
  return (
    <footer className="text-white" id = "contact">
      <div className="xs:flex justify-between items-center px-12 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl ss:mb-0 mb-6 font-semibold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400 font-poppins">Contact</span>
        </h1>
          <div className="flex items-center justify-between text-teal-500 object-center">
              {socialMedia.map ((social) => (
                  <img 
                  key = {social.id} 
                  src = {social.icon} 
                  alt = {social.id} 
                  className = {`p-2 cursor-pointer inline-flex items-center
                  rounded-full bg-gray-700 sm:mx-[27px] hover:text-gray-100 hover:bg-indigo-400
                  duration-300 object-contain md:w-12 md:h-12 w-[40px] h-[40px]`} 
                  onClick = {() => window.open(social.link)} 
                  />
              ))}
          </div>
      </div>
      <div
        className="grid gap-40
        text-center pt-2 text-gray-400 text-sm pb-4 font-poppins">
        <span>© 2022 Atharva Jain. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default footer



{/* <div className = "xs:mt-2 xs:ml-4 md:text-right text-center md:ml-4 flex">
    <button type = "button" className = "bg-secondary font-poppins font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl py-1 px-4">
        <a href = "mailto:atharvajain21@gmail.com">Get In Touch</a>
    </button>
    <div className = {`flex sm:flex-row flex-col`}>
        {socialMedia.map ((social,index) => (
            <img 
            key = {social.id} 
            src = {social.icon} 
            alt = {social.id} 
            className = {`flex flex-col ml-2 w-[40px] h-[40px] md:mt-0 mt-[4px] sm:object-contain cursor-pointer justify-items-end items-center
            transition ease-in-out delay-150 bg-gradient-to-b from-indigo-700 to-blue-400 hover:from-pink-500 hover:to-yellow-500
            hover:-translate-y-1 hover:scale-110 duration-400 rounded-full
            ${index !== socialMedia.length-1 ? "mr-[2px]":"mr-0"}`} 
            onClick = {() => window.open(social.link)} 
            />
        ))}
    </div>
</div> */}