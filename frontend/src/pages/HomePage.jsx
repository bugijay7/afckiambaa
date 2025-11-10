import React from 'react'
import Hero from '../components/Home/Hero'
import AboutPreview from '../components/Home/AboutPreview'
import MissionPreview from '../components/Home/MissionPreview'
import EventPreview from '../components/Home/EventsPreview'
import CTASection from '../components/Home/CtaSection'
import ServiceInfo from '../components/Home/ServiceInfo'

function HomePage() {
  return (
    <div>
        <section data-aos="fade-up"><Hero /> </section>
        <section data-aos="zoom-in"> <AboutPreview /></section>
        <section data-aos="fade-right"><EventPreview /> </section>
         <section data-aos="fade-left"><MissionPreview /> </section>
        <section data-aos="flip-up"><ServiceInfo /> </section>
         <section data-aos="fade-up"><CTASection /> </section>
    </div>
  )
}

export default HomePage