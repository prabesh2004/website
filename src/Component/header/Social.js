import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
function Social() {
  return (
    <div className='header__social'>
        <a herf="https://www.facebook.com/prabesh.khanal.7906" target="_blank"  rel="noopener noreferrer"><BsFacebook/></a>
        <a href="https://github.com/Prabesh69" target="_blank"  rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/entry069/" target="_blank"  rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default Social