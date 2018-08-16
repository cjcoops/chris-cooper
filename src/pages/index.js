import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import About from '../components/about'
import Experience from '../components/experience'
import Section from '../components/section'

const IndexPage = () => (
  <div>
    <Intro color="#f6e8e5" />

    <Section color="white" title="About">
      <About />
    </Section>

    <Section color="#f6e8e5" title="Experience">
      <Experience />
    </Section>
  </div>
)

export default IndexPage
