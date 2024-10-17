import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  return (
    <div>
        <h1>Contact Page</h1>
        <div className='contactButton'>
          <div><button  onClick={()=>navigate('info')}>Contact Info</button></div>
          <div><button className='contact-btn' onClick={()=>navigate('form')}>Contact Form</button></div>
        </div>
    </div>
  )
}

export default Contact