import React,{useState,useEffect} from 'react'
import axios from 'axios';
import cookie from 'universal-cookie';
import './Appointment.css'
import ListItem from './ListItem';


export default function Appointment() {

    const cookies = new cookie();
    var x= cookies.get('email');


    const [arr,setarr] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/${x}`).then((response)=>{
            setarr(response.data);
        })
    })

  return (
    <>

            <div className="header">
                Your Appointments
            </div>


            <div className="list">
            {
            
                arr.map(function(item, i){
            
                return <ListItem date={item.date} time={item.time} email={item.email} age={item.age} />

            })
         }
            </div>

    </>

  )
}
