import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import NotFound from './components/NotFound'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Services />
      <CTA />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App