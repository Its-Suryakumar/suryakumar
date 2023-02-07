import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__hardskills">
            <h3>Hardskills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Programming (C,C++,Java,Python)</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Cloud(Azure,GCP)</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Go Lang</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Docker</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Stock Marketing</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
        {/*--------------------END OF HARDSKILLS----------------------- */}
        <div className="experience__softskills">
          <h3>Softskills</h3>
          <div className='experience__content'>
          <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Teamwork</h4>
                <small className='text-light'>A good Teammate!</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Problem Solving</h4>
                <small className='text-light'>That what the world needs</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Self Motivation</h4>
                <small className='text-light'>I can do this all day</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Networking</h4>
                <small className='text-light'>I love to connect with everyone</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Emotional Intelligence</h4>
                <small className='text-light'>For a peaceful mind</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Empathy</h4>
                <small className='text-light'>That's how a strong team is built</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default experience