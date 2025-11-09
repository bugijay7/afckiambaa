import React from 'react'
import Leadership from '../components/About/Leadership'
import OurStory from '../components/About/OurStory'
import Mission from '../components/About/Mission'
import Vision from '../components/About/Vision'
import Beliefs from '../components/About/Beliefs'
import StatementOfFaith from '../components/About/StatementOfFaith'

function About() {
  return (
    <div>
      {/* 🕊️ Our Story */}
      <section id="story">
        <OurStory />
      </section>

      {/* 🎯 Mission */}
      <section id="mission">
        <Mission />
      </section>

      {/* 🌅 Vision */}
      <section id="vision">
        <Vision />
      </section>

      {/* 📖 Core Beliefs */}
      <section id="beliefs">
        <Beliefs />
      </section>

      {/* 👥 Leadership */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* ✝️ Statement of Faith */}
      <section id="faith">
        <StatementOfFaith />
      </section>
    </div>
  )
}

export default About
