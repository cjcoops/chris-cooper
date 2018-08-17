import React from 'react'

const EventList = ({ data }) => {
  const createItem = (item, index) => (
    <div key={index}>
      <b>{item.title}</b>
      <div>
        <small>{item.subtitle}</small>
      </div>
      <div>{item.description}</div>
      <br />
    </div>
  )

  return <div>{data.items.map(createItem)}</div>
}

export default EventList
