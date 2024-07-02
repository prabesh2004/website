import React from 'react'
import './achievement.css';

import ME from '../../assets/hackathon.jpeg';
function Achievement() {
  return (
    <section id="achievement">
    <h5>My notable achievements</h5>
    <h2>Achievements</h2>
    <div className="container">
      {/* First */}
      <article className="portfolio_item achievement">
     
          <div className="hold">
            <div className="portfolio_item-image">
              <img src={ME} alt="Project" />
            </div>
            <div className="information">
              <h3 className="h3_prot">Hackathon win</h3>
              <p className="p_prot">
                Winner of Inter community based Hackathon 1.0. Sponsored by Tilottama Municipality. Conducted on 10th June 2023.
              
              </p>
            </div>
          </div>
     
      </article>

     
   

    
    </div>
  </section>
  )
}

export default Achievement