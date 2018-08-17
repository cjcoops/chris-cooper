import React from 'react'

const Skills = ({ data }) => {
  return (
    <div>
      <div>
        <strong>Strong: </strong>
        {data.strong.sort().join(', ')}
      </div>
      <br />
      <div>
        <strong>Knowledgable: </strong>
        {data.knowledgable.sort().join(', ')}
      </div>
    </div>
  )
}

export default Skills
