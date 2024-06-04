import React from 'react'
import './portfolio.css'
import RE from '../../assets/portfolio1.jpg'

import ME from '../../assets/skynewz.png'
import {BsGithub} from 'react-icons/bs'



function Portfolio() {
  return (
<section id='portfolio'>
  <h5>My Recent Works .</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio_container">
{/* Fir */}

   <a href='https://sky-newz.netlify.app/' target="_blank" rel="noreferrer" > <article className='portfolio_item'>
    <div className="hold">
      <div className="portfolio_item-image">
        <img  src={ME} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Sky-Newz</h3>
      <p className='p_prot'>Sky-Newz is a modern news site created with react js.    <a href="https://github.com/Prabesh2004/Newssite" target="_blank"  rel="noopener noreferrer"><BsGithub/></a></p> 
   
    </div>
    </div>
    </article></a>


{/* Sec */}
<article className='portfolio_item'>
<div className="hold">
      <div className="portfolio_item-image">
        <img  src={RE} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Photoshop</h3>
      <p className='p_prot'>Still in progress! I will update soon</p>
      </div>
      </div>
    </article>
{/* tir */}

<article className='portfolio_item' target="_blank" >
<div className="hold">
      <div className="portfolio_item-image">
        <img  src={RE} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Different web-dev projects</h3>
      <p className='p_prot'>This website is still in development. Projects will be available soon</p>
    </div>
</div>
    </article>
  </div>
</section> )
}

export default Portfolio