import React from 'react'
import styles from './intro.module.css'

const Intro = () => (
  <div className={styles.section}>
    <div className={styles.sectioncontent}>
      <h1>Hi, I'm Chris Cooper.</h1>
      <h3>
        I'm a full stack software developer, currently living in Vancouver.
      </h3>
      <p>Say hello, or keep scrolling.</p>
    </div>
  </div>
)

export default Intro
