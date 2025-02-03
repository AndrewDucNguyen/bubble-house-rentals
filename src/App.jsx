import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Collection from './components/Collection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Services from './components/Services'
import Contact from './components/Contact'
import Process from './components/Process'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <Collection />
      <Process />
      <CTA />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

export default App