import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/suryakumarp/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Its-Suryakumar' target='_blank'><FaGithub/></a>
        <a href='https://twitter.com/Its_Suryakumar' target='_blank'><BsTwitter/></a>
    </div>
  )
}
  
export default HeaderSocial