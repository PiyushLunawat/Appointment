import axios from 'axios';
import React ,{useState} from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom'
import cookie from 'universal-cookie';
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {

  const cookies = new cookie();
  const navigate = useNavigate();

  const [data,setdata] = useState({
    email:'',
    pass:'',
 
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

  const login = ()=>{
    
     
      
      axios.post('http://localhost:5000/login',data).then((response)=>{
        console.log(response.data===true)
        if(response.data===true)
        {
          navigate('/home')
          cookies.set('email',data.email)
        }
        else
        navigate('/')
      })
    
  }

  return (
    <div className='sign'>

        
        <div className="header">Login</div>
        <div className="inp">
            <input type="email" name='email' placeholder='Email-Id' className='text' value={data.email} onChange={setemail}/>
            <input type="password"  name='pass' placeholder='Password' className='text' value={data.pass} onChange={setpass}/>
  
        </div>
        
        <button className='btn' onClick={login}>Submit</button>
      
    </div>
  )
}