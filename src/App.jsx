import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Services from './components/Services'
import Contact from './components/Contact'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <Services />
      <CTA />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

export default App