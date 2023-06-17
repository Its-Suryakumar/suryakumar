import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>VIT GPA Calculator</h3> 
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Its-Suryakumar/vitgpacalculator.github.io' className='btn' target='_blank'>GitHub</a>
          <a href='https://vitgpacalculator.tiiny.site' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Happify Mobile App</h3> 
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Its-Suryakumar/Happify-App' className='btn' target='_blank'>GitHub</a>
          <a href='https://drive.google.com/file/d/1MGWB2XEWnDGGCXnlWDacBeq9gnFP8rgj/view?usp=share_link' className='btn btn-primary' target='_blank'>Download</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Sign Language Recognition</h3> 
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Its-Suryakumar/Sign-Language-Recognition' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/Its-Suryakumar/Sign-Language-Recognition/blob/main/Action%20Detection%20Refined.ipynb' className='btn btn-primary' target='_blank'>Code</a>
          </div>
        </article>
      </div>
    </section>
  ) 
}
export default portfolio