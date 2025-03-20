import React from 'react'
import './About.css'
import image from './cspgcl.jpg'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div className='About_main'>
        <div className='div_sub'>
            <h1>Registration</h1>
             <img src={image} alt='' style={{heigth:'80%;',width:'100%'}}></img>
            
        </div>

        <div className='div_sub '>
            <h1>Salary</h1>

            <p>This is to certify that the project report entitled “News App Compose”, which is submitted by me in the partial fulfilment for the award of the degree of Master of Computer Application </p>
            
        </div>

        <div className='div_sub '>
            <h1>Eligibility</h1>
            <p>School of Studies in Computer Science and I.T., Pt. RSU, Raipur, comprises the original work carried out by me.</p>
            
        </div>

        <div className='div_sub '>
            <h1>Vacancies</h1>
            <p>School of Studies in Computer Science and I.T., Pt. RSU, Raipur, comprises the original work carried out by me.</p>
            
        </div>

        </div>
    )
}

export default About
