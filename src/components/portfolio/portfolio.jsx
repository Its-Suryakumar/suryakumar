import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

          </div>
          <h3>VIT GPA Calculator</h3>
          <a href='https://github.com/Its-Suryakumar' className='btn btn-primary' target='_blank'>GitHub</a>
        </article>
      </div>
    </section>
  )
}
export default portfolio