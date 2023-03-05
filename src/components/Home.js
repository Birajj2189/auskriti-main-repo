import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Body/>
     <Footer/>
    </div>
  )
}
