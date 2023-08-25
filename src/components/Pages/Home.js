import React from 'react'
import Hero from './Hero'
import Specials from "./Specials"
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutUs  location={"home"}/>
    </>
  )
}

export default Home