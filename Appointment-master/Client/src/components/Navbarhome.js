import React from 'react'
import './Navbarhome.css';

export default function Navbarhome() {
  return (
    <div className='navba'>
      <div className="headin">Notes</div>
      
      <div className='actio'>
      <div className=" signu"><a href="/home">Home</a></div>
      <div className="logi"><a href="/appoint">Notes</a></div>
      <div className=" signu"><a href="/">Logout</a></div>
      </div>
    </div>
  )
}
