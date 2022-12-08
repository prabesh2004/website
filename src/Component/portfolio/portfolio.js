import React from 'react'
import './portfolio.css'
import ME from '../../assets/portfolio1.jpg'
// 



// 


function Portfolio() {
  return (
<section id='portfolio'>
  <h5>My Recent Works</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio_container">
{/* Fir */}

    <article className='portfolio_item'>
    <div className="hold">
      <div className="portfolio_item-image">
        <img  src={ME} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Canvas Color Project</h3>
      <p className='p_prot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam!</p>
    </div>
    </div>
    </article>


{/* Sec */}
<article className='portfolio_item'>
<div className="hold">
      <div className="portfolio_item-image">
        <img  src={ME} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Canvas Color Project</h3>
      <p className='p_prot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam!</p>
      </div>
      </div>
    </article>
{/* tir */}

<article className='portfolio_item'>
<div className="hold">
      <div className="portfolio_item-image">
        <img  src={ME} alt="Project" />
      </div>
      <div className="information">
      <h3 className='h3_prot'>Canvas Color Project</h3>
      <p className='p_prot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam!</p>
    </div>
</div>
    </article>
  </div>
</section> )
}

export default Portfolio