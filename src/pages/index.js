import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import About from '../components/about'
import EventList from '../components/eventList'
import Section from '../components/section'

import sections from '../../data/sections.json'

const IndexPage = () => {
  const { about, experience, education } = sections

  return (
    <div>
      <Intro color="linear-gradient(#f6e8e5, #f6e8e5)" />

      <Section data={about}>
        <About />
      </Section>

      <Section data={experience}>
        <EventList data={experience} />
      </Section>

      <Section data={education}>
        <EventList data={education} />
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
