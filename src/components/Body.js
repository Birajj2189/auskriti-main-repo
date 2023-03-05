import React from 'react'
import {Link} from 'react-router-dom'

export default function Body() {
  return (
    <div>
     <section className=" bg-black text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="br-50 shadow-in bg-purple lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
               <img className="object-cover object-center rounded" alt="hero" src="../png-logo.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className='flex-col mb-2 w-full items-center'>
               <h1 className="logo1 title-font mb-1 text-4xl md:text-[4rem] font-medium text-white">auskriti 2023
               </h1>
               <p className="title-font md:text-2xl text-1xl  text-purple">22nd to 24th March
               </p>
          </div>
               <p className="mb-4 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
               <div className="flex justify-center">
               <Link to="/pricing" className="text-purple font-bold text-2xl ">Get your tickets here &gt;</Link>
               </div>
          </div>
          </div>
     </section>
     <section className=" bg-black text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
               <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className='flex-col mb-2 w-full items-center'>
                         <h1 className="logo1 title-font mb-1 text-4xl md:text-[4rem] font-medium text-white">Our Merchandise
                         </h1>
                    </div>
                    <p className="mb-4 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                    <Link to="/tshirt" className="text-purple font-bold text-2xl ">Get your Tshirt now &gt;</Link>
               </div>
          </div>
               <div className="br-50 shadow-in bg-purple lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="../png-logo.png"/>
               </div>
          </div>
     </section>
    </div>
  )
}
