import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import About from '../components/About'
import Experience from '../components/Experience'

const IndexPage = () => (
  <div>
    <Intro color="#f6e8e5" />
    <About color="white" />
    <Experience color="#f6e8e5" />
  </div>
)

export default IndexPage
