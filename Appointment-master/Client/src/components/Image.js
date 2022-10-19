import React from 'react'
import './Image.css'

export default function Image() {
  return (
    <div className='image'>
      <img src={require('./Image.jpg')}  className='images' />
    </div>
  )
}
