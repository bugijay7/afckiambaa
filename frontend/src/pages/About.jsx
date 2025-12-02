import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Leadership from '../components/About/Leadership';
import OurStory from '../components/About/ourStory';
import Mission from '../components/About/Mission';
import Beliefs from '../components/About/Beliefs';
import StatementOfFaith from '../components/About/StatementOfFaith';

function About() {
  const location = useLocation();

  // ⭐ Enable scrolling to hash (#mission, #vision, #leadership, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
  );
}

export default About;
