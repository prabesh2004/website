import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {BiAward} from "react-icons/bi"
import {FiUsers} from "react-icons/fi"
import {BiFolderPlus} from "react-icons/bi"
function About() {
  return (
<section id='about'>
  <h5>Get to know</h5>
  <h2>About Me</h2>
  <div className='about__container container'>
  <div className='about__me'>
    <div className="about__me-image">
      <img src={ME} alt="" />
    </div>
  </div>
  <div className='container about__content'>
    <div className="about__cards">
      <article className='about__card'>
        <BiAward className='about__icon'/>
        <h5>Experience</h5>
        <small>{`> 1year && Still learning`}</small>
        </article>


        <article className='about__card'>
        <BiFolderPlus className='about__icon'/>
        <h5>Projects</h5>
        <small>10+  </small>
        </article>

        <article className='about__card client'>
        <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>0(just started)</small>
      </article>
    </div>
    <p>
    I'm Prabesh Khanal, a native of Rupandehi, Nepal. I study computers and am a newbie web developer. This is my personal website, where you can find all the information you need about myself, my background, and my most recent projects.
    </p>
    <a href="#contact" className='btn btn-primary'  rel="noopener noreferrer">Let's Talk</a>
  </div>
  </div>
</section>  )
}

export default About