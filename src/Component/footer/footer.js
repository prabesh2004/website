import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
function Footer() {
  return (
<footer>
  <a href="#" className='footer_logo'>Prabesh Khanal</a>
  <u1 className="permalinks">
    <li><a href=""></a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#exp">Experience</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </u1>
  <div className="footer_socials">
    <a href="https://www.facebook.com/prabesh.khanal.7906" target="_blank"><FaFacebookF/></a>
    <a href="https://www.instagram.com/entry069/" target="_blank"><AiFillInstagram/></a>

  </div>
  
</footer>
  )
}

export default Footer