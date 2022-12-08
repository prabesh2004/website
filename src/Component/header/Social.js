import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
function Social() {
  return (
    <div className='header__social'>
        <a herf="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><BsDribbble/></a>
    </div>
  )
}

export default Social