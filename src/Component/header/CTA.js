import React from 'react'
import { useEffect } from 'react'

function CTA() {
  useEffect(()=>{
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
    console.log(color)
  },[])


  return (
    <div className='cta'>
        {/* <a href={CV} className="btn">Download CV</a> */}
        <button className="btn theme" >Change-Theme</button>

        <a href='#contact' className='btn btn-primary'  rel="noopener noreferrer">Let's Talk</a>

    </div>
  )
}

export default CTA