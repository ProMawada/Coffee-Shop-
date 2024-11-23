import React from 'react'
import Header from './Header'
import Hero_section from './Hero_section'
import About_section from './About_section'
import Menu from './Menu'
import Gallery_section from './Gallery_section'
import Contact_section from './Contact_section'
import Footer_section from './Footer_section'
import Testimonials_section from './Testimonials_section'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero_section/>
    <About_section/>
    <Menu/>
    <Testimonials_section/>
    <Gallery_section/>
    <Contact_section/>
    <Footer_section/>
    
    </>
)
}

export default Home