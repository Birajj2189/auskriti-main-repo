import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-black text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-24 w-36" src="../png-logo.png" alt="#" />
          <span className="ml-3 logo1 text-white text-4xl">Auskriti 2023</span>
    </a>
    <nav className="shift md:ml-auto flex flex-wrap items-center text-[1.2rem] justify-center">
          <Link to="/" className="a mr-5 text-white hover:text-purple">Home</Link>
          <Link to="/theme" className="a mr-5 text-white hover:text-purple">Theme</Link>
          <Link to="/events" className="a mr-5 text-white hover:text-purple">Events</Link>
          <Link to="/team" className="a mr-5 text-white hover:text-purple">Team</Link>
          <Link to="/ContactUs" className="a mr-5 text-white hover:text-purple">Contact Us</Link>
    </nav>
    </div>
    </header>

  )
}
