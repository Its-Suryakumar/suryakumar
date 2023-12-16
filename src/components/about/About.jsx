import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
import {FaChalkboardTeacher} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me :)</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>Ex-Intern @ Aerobiosys Innovations</small>
              </article>
              <article className='about__card'>
                  <BiCodeAlt className='about__icon'/>
                  <h5>Projects</h5>
                  <small>10+<br/>Refer GitHub</small>
              </article>
              <article className='about__card'>
                  <FaChalkboardTeacher className='about__icon'/>
                  <h5>Academics</h5>
                  <small>Current CGPA  8.76<br/>(5th Semester)</small>
              </article>
            </div>
            <p>
            I am a Third Year Software Engineering student at VIT Chennai with a strong passion for computer science. I have a deep appreciation for technology and its ability to change the world. I love to keep up with the latest advancements in the field and am always eager to learn new things. My education has equipped me with a strong foundation in various computer science concepts, and I am confident in my ability to apply these skills to real-world problems. Open for Internships to learn and apply various technologies.Experienced in Web Development and Cloud. I am excited about the future of computer science and believe that I have a valuable contribution to make in this field. With my passion, enthusiasm, and determination, I am confident that I will achieve my goals and make a lasting impact in the world of technology.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About 