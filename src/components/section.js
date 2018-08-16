import React from 'react'
import Link from 'gatsby-link'

const Section = ({ children, color, title, dat }) => (
  <div className="section" style={{ background: dat.background }}>
    <div className="content section-content">
      <h2>{dat.title}</h2>
      <div>{children}</div>
    </div>
  </div>
)

export default Section
