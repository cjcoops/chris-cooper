import React from 'react'
import Link from 'gatsby-link'

const Section = ({ children, data }) => (
  <div className="section" style={{ background: data.background }}>
    <div className="content section-content">
      <h2>{data.title}</h2>
      <div>{children}</div>
    </div>
  </div>
)

export default Section
