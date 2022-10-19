import React from 'react'
import './Division.css'
import Popup from 'reactjs-popup'
import Pop from './Popup'
export default function Division(props) {
  return (
    <div className='division'>
      <div className="name">
        <h2>{props.name}</h2>
      </div>
      <div className="time">
        {props.time}
      </div>
      <div className="spaces">
        <h4>{props.spaces+" "}available</h4>
      </div>
      <Popup trigger={
      <div className="book">
        <button className='button'>BOOK APPOINTMENT</button>
      </div>}
      modal
      nested
      >
          <Pop time={props.time} date={props.date} name={props.name}/>
          

      </Popup>
      
    </div>
  )
}
