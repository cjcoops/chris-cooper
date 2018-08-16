import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import About from '../components/about'
import Experience from '../components/experience'
import Section from '../components/section'
import _ from 'underscore'

import sections from '../../data/sections.json'

const IndexPage = () => {
  const dataWithKeys = _.map(sections, (item, key) => {
    item.name = key
    return item
  })

  const [about, experience] = dataWithKeys

  return (
    <div>
      <Intro color="linear-gradient(#f6e8e5, #f6e8e5)" />

      <Section dat={about}>
        <About />
      </Section>

      <Section dat={experience}>
        <Experience />
      </Section>
    </div>
  )
}

export default IndexPage

// export const query = graphql`
//   query SectionsQuery {
//     allSectionsJson {
//       edges {
//         node {
//           title
//           background
//           items {
//             title
//             subtitle
//             description
//           }
//           text
//         }
//       }
//     }
//   }
// `
