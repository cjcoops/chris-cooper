import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import About from '../components/about'
import EventList from '../components/eventList'
import Section from '../components/section'
import Skills from '../components/skills'
import Footer from '../components/footer'

import site from '../../data/site.json'

const IndexPage = () => {
  const { about, experience, education, skills } = site

  return (
    <div>
      <Intro color="linear-gradient(#f6e8e5, #f6e8e5)" />

      <Section data={about}>
        <About data={about} />
      </Section>

      <Section data={experience}>
        <EventList data={experience} />
      </Section>

      <Section data={education}>
        <EventList data={education} />
      </Section>

      <Section data={skills}>
        <Skills data={skills} />
      </Section>

      <Footer />
    </div>
  )
}

export default IndexPage
