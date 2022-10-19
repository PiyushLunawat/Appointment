import React from 'react'
import './ListItem.css'

export default function ListItem(props) {
  return (
    <div className='listiem'>
      <ul>
          <li>
            {props.date}
          </li>
          <li>
           {props.time}
          </li>
          <li>
            {props.email}
          </li>
          <li>
            {props.age}
          </li>
      </ul>
    </div>
  )
}
