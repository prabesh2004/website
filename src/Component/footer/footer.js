import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
function Footer() {
  return (
<footer>
  <a href="#" className='footer_logo'>Prabesh Khanal</a>
  <u1 className="permalinks">
    <li><a href=""></a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#exp">Experience</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contsct</a></li>
  </u1>
  <div className="footer_socials">
    <a href="https://www.facebook.com/prabesh.khanal.7906"><FaFacebookF/></a>
  </div>
  
</footer>
  )
}

export default Footer