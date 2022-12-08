import React from 'react'
import './exp.css'
function Exp() {





  return (
<section id='exp'>
  <h5>What Skills I Have</h5>
  <h2>Experience</h2>
  
  <div className="container exp__container">
    <div className="skillbar">
      <div className="skill"><span>Html</span><div className="bar"><div className="bars first"></div>90%</div></div>
      <div className="skill"><span>Css</span><div className="bar"><div className="bars sec"></div>90%</div></div>
      <div className="skill"><span>JS</span><div className="bar"><div className="bars thr"></div>80%</div></div>
      <div className="skill"><span>React</span><div className="bar"><div className="bars for"></div>75%</div></div>
      <div className="skill"><span>Python</span><div className="bar"><div className="bars fiv"></div>75%</div></div>
    </div>
</div>
</section> )
}

export default Exp