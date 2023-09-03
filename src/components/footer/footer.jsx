import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Suryakumar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com/in/suryakumarp'><FaLinkedin/></a>
        <a href='https://instagram.com/suryakumar.exe'><FaInstagram/></a>
        <a href='https://twitter.com/Its_Suryakumar'><FaTwitter/></a>
        <a href='https://github.com/Its-Suryakumar'><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Suryakumar P All rights reserved</small>
      </div>
    </footer>
  )
}
export default footer