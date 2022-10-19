import React,{useState} from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import Division from './Division'

export default function Calenda() {

    const [date,setdate] = useState(new Date())
    
  
  return (
    <>
    <div className="home">
    <div className="calendar">
       <Calendar onChange={setdate} value={date}/>
    </div>
    <div className="img">
    <img src={require('./Image2.jpg')}  className='i' />
    </div>
    
    </div>
    <div className="date">
     
    <h2>{date.toString()}</h2>

   </div>
    <div className='boxes'>
   <div className="list">
     <Division name="Dentist" time="8:00 AM - 9:00 AM" spaces="10" date={date} />
     <Division name="Eye" time="9:00 AM - 10:00 AM" spaces="8"  date={date}/>
     <Division name="Cancer" time="10:00 AM - 11:00 AM" spaces="10" date={date} />
     </div>
     <div className="list">
     <Division name="Cancer" time="10:00 AM - 11:00 AM" spaces="10" date={date} />
     <Division name="Cancer" time="10:00 AM - 11:00 AM" spaces="10" date={date} />
     <Division name="Cancer" time="10:00 AM - 11:00 AM" spaces="10" date={date} />
     </div>
   </div>
   </>
  )
}
