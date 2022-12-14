import React from 'react'
import { useEffect } from 'react'

function CTA() {
  useEffect(()=>{
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
    console.log(color)
  },[])
function changetheme(color ){
  document.documentElement.style.setProperty('--color-primary', )
}
function changetheme(){
  
}

  return (
    <div className='cta'>
        {/* <a href={CV} className="btn">Download CV</a> */}
        <button className="btn theme" onClick={()=>{changetheme(active)}}>Change-Theme</button>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA