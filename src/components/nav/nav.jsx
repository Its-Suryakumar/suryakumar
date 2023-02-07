import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {VscVmActive} from 'react-icons/vsc'
import {RiStarSmileFill} from 'react-icons/ri'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><BiHomeSmile /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav=== '#about' ? 'active':''}><AiOutlineInfoCircle /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active':''}><VscVmActive /></a>
      <a href='#testimonials' onClick={()=>setActiveNav('#testimonials')} className={activeNav=== '#testimonials' ? 'active':''}><RiStarSmileFill /></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active':''}><MdOutlinePermContactCalendar /></a>
    </nav>
  )
}
export default Nav