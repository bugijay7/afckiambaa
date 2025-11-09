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
        <Hero />
        <AboutPreview />
        <EventPreview />
        <MissionPreview />
        <ServiceInfo />
         <CTASection />
    </div>
  )
}

export default HomePage