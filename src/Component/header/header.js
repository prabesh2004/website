import React from 'react'
import './header.css'
import CTA from './CTA.js'
import ME from '../../assets/me.png'
import Social from './Social'
function Header() {
return (

    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prabesh Khanal</h1>
        <h5 className="text-light">CS student && a Geek</h5>
        <CTA/>
    <Social/> 
        <div className="me">
    <img src={ME} alt="me" />
</div>
<a href="#contact" className="scroll__down">scroll down</a>

      </div>
    </header>
  )
}

export default Header