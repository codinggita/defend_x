import React from 'react'
import './Hero.css'
import h1 from '../images/h1.jpg';

const chooseData = [
  {
    icon:'fa-solid fa-wifi',
    title:'Private Security',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum odit ducimus quisquam voluptas quibusdam porro? Quod dicta adipisci fugit aliquam tempore quis tenetur, architecto inventore culpa itaque nobis quas.'
  },
  {
    icon:'fa-solid fa-champagne-glasses',
    title:'Event Security',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum odit ducimus quisquam voluptas quibusdam porro? Quod dicta adipisci fugit aliquam tempore quis tenetur, architecto inventore culpa itaque nobis quas.'
  },
  {
    icon:'fa-solid fa-car',
    title:'Travel Security',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum odit ducimus quisquam voluptas quibusdam porro? Quod dicta adipisci fugit aliquam tempore quis tenetur, architecto inventore culpa itaque nobis quas.'
  },
  {
    icon:'fa-solid fa-house-chimney',
    title:'Residential Security',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum odit ducimus quisquam voluptas quibusdam porro? Quod dicta adipisci fugit aliquam tempore quis tenetur, architecto inventore culpa itaque nobis quas.'
  },

]

const Hero = () => { 
  return (
    <section id="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
          <h6 className="subtitle">Why choose us</h6>
          <h2>Specialist in Protecting our clients from</h2>
          <h2 className='highlight'>Different Threats</h2>
          <p className='description hero__content-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita 
            tempore, illum cumque possimus deserunt, vitae aut consectetur 
            quo inventore blanditiis repudiandae beatae aliquid quae non nesciunt 
            aspernatur excepturi. Suscipit, consequuntur!
          </p>
          <div className="choose_item-wrapper">
          {
            chooseData.map((item,index)=>(
              <div className="choose_us-item" key={index}>
              <span className='choose_us-icon'>
                <i class={item.icon}></i>
                </span>
              <div>
                <h3 className='choose_us-title'>{item.title}</h3>
                <p className='description'>{item.desc}</p>
              </div>
            </div>
            ))
          }
          </div>
          </div>
          <div className="hero_img">
          <img src={h1}alt='' /></div>
        </div>
        </div>
        </section>
  )
}

export default Hero;