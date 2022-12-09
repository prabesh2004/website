import React from 'react'
import './portfolio.css'
import ME from '../../assets/portfolio1.jpg'
// 



// 


function Portfolio() {
  return (
<section id='portfolio'>
  <h5>My Recent Works .. (All projects will be availabe in few days)</h5>
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
      <p className='p_prot'>This is a canva js color project serves no purpose just made for fun</p>
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
      <h3 className='h3_prot'>Photoshop</h3>
      <p className='p_prot'>Still in progress! I will update soon</p>
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
      <h3 className='h3_prot'>Different web-dev projects</h3>
      <p className='p_prot'>This website is still in development. Projects will be available soon</p>
    </div>
</div>
    </article>
  </div>
</section> )
}

export default Portfolio