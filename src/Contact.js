import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div>
       <h2>Contact Us</h2>
       <input type='text' placeholder='Name'/><br></br>
       <input type='text' placeholder='Email'/><br></br>
       <textarea placeholder='Message'></textarea><br></br>
       <button>Send</button>

    </div>
  )
}

export default Contact
