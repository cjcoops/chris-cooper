import React from 'react'

const About = ({ data }) => (
  <div>
    {data.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
  </div>
)

export default About
