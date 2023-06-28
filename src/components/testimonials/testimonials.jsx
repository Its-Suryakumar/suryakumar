
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sam Prince Franklin K',
    des: 'Beta - MLSA, Student Council Member - VIT Chennai',
    review: 'His unwavering passion for technology is inspiring, and his versatility as an all-rounder is remarkable. Surya consistently excels across multiple domains, making him a valuable asset in any endeavor.'
  },
  {
    avatar: AVTR2,
    name: 'Venukanthan BS',
    des: 'CyberSec Lead - Linux Club - VIT Chennai',
    review: 'Suryakumar is a highly committed web developer who consistently seeks out new learning opportunities and stays updated with industry trends and technologies. His strong collaboration skills make him a valuable asset, as he readily shares his knowledge and expertise with colleagues and clients. However, there is room for improvement in his time management skills, as he sometimes becomes engrossed in his work and works long hours. Overall, Suryakumar is a talented and dedicated web developer with a bright future ahead.'
  },
  {
    avatar: AVTR3,
    name: 'Arnab Nayak',
    des: 'President - The White Helmets Club - VIT Chennai',
    review: 'He is a very genuine and practical person. He\'s a great diplomat in rising as well; has the understanding of what to speak where but not deviate from the truth. According to me he values integrity and honesty the best and is great in communicating and establishing quick but healthy interpersonal relationships. Although has an extensive skill set as compared to the class, he is absolutely humble about the possession of such skills and always ready to help whomever in whatever way possible.'
  },
  
  {
    avatar: AVTR4,
    name: 'Akilesh S',
    des: 'Secretary Of Technical Departments, Microsoft Innovations Club - VIT Chennai',
    review: 'Suryakumar is always excited to learn and find out about new and upcoming technologies. He is very passionate and driven by his love for his computer science.'
  },
  
  {
    avatar: AVTR5,
    name: 'Suresh Kanna',
    des: 'Final Year Intern at Ericsson, Senior - VIT Chennai',
    review: 'The curious kid loves to learn about tech stuffs. He would spend hours reading about new technologies and how they work. He also loves to build things, and he often participate in hackathons to develop new projects. He is a great team player and is always willing to help others. He is also passionate about blockchain technology and is determined to learn as much as he could about it. He believe that blockchain has the potential to revolutionize the world, and he wants to be a part of that revolution.'
  },
  {
    avatar: AVTR6,
    name: 'Rupachandran S',
    des: 'Cybersecurity Professional and Application Security Researcher - VIT Chennai',
    review: 'Suryakumar is a hard worker and is always willing to learn new things.He is a team player and is always willing to help others. He is a valuable asset to any team and is sure to be successful in his career.He is really Interested to learn new things .Also He also won several awards on various Hackathons such as Krypton which was conducted by android club and zero Bugs Club.'
  },
  
  ]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>
      
      <Swiper className='container testimonials__container'
      modules={[Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      >
        {
          data.map(({avatar,name,des,review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                <img src={avatar}/>
                </div>
                <h4 className='client__name'>{name}</h4>
                <h5 classname='text-light'>{des}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default testimonials
