import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeMain'
import Footer from '../components/Footer'
import NewsSection from '../components/News'
import ServicesSection from '../components/Services'
import Project from './Project'
import About from './About'


const Home = () => {
  return (
    <>
<main className='w-full h-screen  '>
  <Navbar/>
  <HomeSection/>
  <About/>
  <Project/>
  <ServicesSection/>
  <NewsSection/>
  <Footer/>
</main>
    </>
  )
}

export default Home