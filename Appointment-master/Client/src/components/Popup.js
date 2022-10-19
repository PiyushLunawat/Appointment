import React ,{useState} from 'react'
import'./Popup.css'
import axios from 'axios';


export default function Popup(props) {


    const [obj,setobj] = useState({
        dat:props.date.toString(),
        tim:props.time,
        name:'',
        age:''
    })

    const setname = (e)=>{
        setobj({
        dat:props.date.toString(),
        tim:props.time,
        name:e.target.value,
        age:obj.age
        })
    }
    const setage = (e)=>{
        setobj({
        dat:props.date.toString(),
        tim:props.time,
        name:obj.name,
        age:e.target.value
        })
    }

    const submitdata = ()=>{

        axios.post('http://localhost:5000/appoint',obj);
    }

  return (
    <div className='pop'>
      
        <div className="nam" >{props.name}</div>
        <input type="text" name='date' value={props.date.toString()} className='w' />
        <input type="text"  name='time' value={props.time} className='w'/>
        <input type="email" name='email' placeholder='Email-Id' className='w' value={obj.name} onChange={setname}/>
        <input type="text" name='age' placeholder='Age' className='w'  value={obj.age} onChange={setage} />
        <a className='button' href='/home' onClick={submitdata}>Submit</a>
        


    </div>
  )
}
