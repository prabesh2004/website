import React from 'react';
import './portfolio.css';
import RE from '../../assets/portfolio1.jpg';
import JS from '../../assets/JS.jpeg';

import ME from '../../assets/skynewz.png';
import { BsGithub } from 'react-icons/bs';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {/* First */}
        <article className="portfolio_item">
          <a href="https://sky-newz.netlify.app/" target="_blank" rel="noreferrer">
            <div className="hold">
              <div className="portfolio_item-image">
                <img src={ME} alt="Project" />
              </div>
              <div className="information">
                <h3 className="h3_prot">Sky-Newz</h3>
                <p className="p_prot">
                  Sky-Newz is a modern news site created with react js.{' '}
                  <a
                    href="https://github.com/Prabesh2004/Newssite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </p>
              </div>
            </div>
          </a>
        </article>

        {/* Second */}
        <article className="portfolio_item">
          <a href='https://github.com/prabesh2004/Javascript-Interview-and-advance-concepts.git' target="_blank" rel="noreferrer">
            <div className="hold">
              <div className="portfolio_item-image">
                <img src={JS} alt="Project" />
              </div>
              <div className="information">
                <h3 className="h3_prot">JS Advanced</h3>
                <p className="p_prot">JavaScript advance topics for job interview and learning.
                <a
                    href="https://github.com/prabesh2004/Javascript-Interview-and-advance-concepts.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </p>
              </div>
            </div>
          </a>
        </article>

        {/* Third */}
        <article className="portfolio_item">
          <a href='/' target="_blank" rel="noreferrer">
            <div className="hold">
              <div className="portfolio_item-image">
                <img src={RE} alt="Project" />
              </div>
              <div className="information">
                <h3 className="h3_prot">Webdev</h3>
                <p className="p_prot">
                  This website is still in development. 
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </p>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
