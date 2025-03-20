import React from 'react'
import './Header.css'
import image1 from './CSPGCL.png'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div >

            <div className='Header'>
                <img src={image1} alt="" ></img>

                <h1 className='Header_main'>Welcome to CSPDCL</h1>
                 <ul style={{display:'flex',justifyContent:'space-evenly',border:'2px slod red ',height:'15%',width:'40%'}}> 
                   <Link to='./Contact'><li>Home</li></Link>
                   <Link to='./About'><li>About</li></Link>
                   <Link to='./Contact'><li>Gomti</li></Link>
                   <Link to='./Contact'><li>contact</li></Link>  
                 </ul>

            </div>

        </div>
    )
}

export default Header
