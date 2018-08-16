import React from 'react'
import styles from './intro.module.css'

const Intro = ({ color }) => (
  <div className="intro" style={{ backgroundColor: color }}>
    <div className="content intro-content">
      <h1>Hi, I'm Chris Cooper.</h1>
      <h3>
        I'm a full stack software developer, currently living in Vancouver.
      </h3>
      <p>Say hello, or keep scrolling.</p>
    </div>
  </div>
)

export default Intro
