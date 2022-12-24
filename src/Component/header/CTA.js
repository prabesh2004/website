import React from 'react'

function CTA() {

function setcolor(){
  if(getComputedStyle(document.documentElement).getPropertyValue('--color-primary')==="#4db5ff"){
    document.documentElement.style.setProperty('--color-primary', '#34ff71')
    document.documentElement.style.setProperty("--color-primary-variant",'  rgba(77, 255, 157, 0.4)')
    document.documentElement.style.setProperty("--color-bg-variant",'  #30861b')
    document.documentElement.style.setProperty("--color-hover","#4db5ff")




  }else{
    document.documentElement.style.setProperty('--color-primary', "#4db5ff")
    document.documentElement.style.setProperty("--color-primary-variant",'rgba(77,181,255,0.4)  ')
    document.documentElement.style.setProperty("--color-bg-variant",'#2c2c6c')
    document.documentElement.style.setProperty("--color-hover",'#34ff71')
    

  }
  console.log("button clicked")
}

  return (
    <div className='cta'>
        <button className="btn theme" onClick={ setcolor} >Change-Theme</button>

        <a href='#contact' className='btn btn-primary'  rel="noopener noreferrer">Let's Talk</a>

    </div>
  )
}

export default CTA