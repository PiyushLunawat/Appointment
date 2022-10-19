import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios'
export default function SignupForm() {


  const [data,setdata] = useState({
    email:'',
    pass:'',
    confirmpass:''
  });

  const setemail = (e)=>{
    setdata({
      email:e.target.value,
      pass:data.pass,
      confirmpass:data.confirmpass
    })
  }
  const setpass = (e)=>{
    setdata({
      email:data.email,
      pass:e.target.value,
      confirmpass:data.confirmpass
    })
  }
  const setconfirm = (e)=>{
    setdata({
      email:data.email,
      pass:data.pass,
      confirmpass:e.target.value
    })
    console.log(data)
  }

  const submitdata =()=>{

    console.log(data);
    axios.post('http://localhost:5000/signup',data);

  }


  return (
    <div className='sign'>

        <div className="header">Sign Up</div>
        <div className="inp">
            <input type="email" name='email' placeholder='Email-Id' className='text' value={data.email} onChange={setemail}/>
            <input type="password"  name='pass' placeholder='Password' className='text' value={data.pass} onChange={setpass}/>
            <input type="password" name="confirmpass" placeholder='Confirm Password' className='text' value={data.confirmpass} onChange={setconfirm}/>
        </div>
        <button className='btn' onClick={submitdata}>Submit</button>
      
    </div>
  )
}
