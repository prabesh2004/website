import React, { useState } from 'react'
import './nav.css'
import{BiHomeHeart} from "react-icons/bi"
import{BiUserCircle} from "react-icons/bi"
import {BiBookmarkHeart} from "react-icons/bi"
import {BiMessageAdd} from "react-icons/bi"
import {AiOutlineProject} from "react-icons/ai"

function Nav() {
  const[Active,Activenow]=useState('#')
  return (
 <nav>
  <a href="#" onClick={()=> Activenow("#")}className={Active==='#'?'active':''}><BiHomeHeart/></a>
  <a href="#about" onClick={()=> Activenow("#about")} className={Active==='#about'?'active':''}><BiUserCircle/></a>
  <a href="#exp"  onClick={()=> Activenow("#exp")}className={Active==='#exp'?'active':''}><BiBookmarkHeart/></a>
  <a href="#portfolio"  onClick={()=> Activenow("#pro")}className={Active==='#pro'?'active':''}><AiOutlineProject/></a>
  <a href="#contact"  onClick={()=> Activenow("#con")}className={Active==='#con'?'active':''}><BiMessageAdd/></a>
 </nav>
  )
}

export default Nav