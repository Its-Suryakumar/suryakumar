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
                <h4>Kubernetes</h4>
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
                <h4>Machine Learning</h4>
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
                <h4>Leadership</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Problem Solving</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Self Motivation</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Networking</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Emotional Intelligence</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Teamwork</h4>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default experience