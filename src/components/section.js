import React from 'react'
import Link from 'gatsby-link'

const Section = ({ children, color, title }) => (
  <div className="section" style={{ backgroundColor: color }}>
    <div className="section-content">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  </div>
)

export default Section
