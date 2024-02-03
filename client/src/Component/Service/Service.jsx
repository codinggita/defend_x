import React from 'react'
import './Service.css'

const serviceData = [
  {
    icon:'fa-solid fa-mask',
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

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h6 className="subtitle">What we offer?</h6>
          <h2>Save You and Your Loved Ones With</h2>
          <h2 className='highlight'>Our Best Services</h2>
        </div>
        <div className="service_item-wrapper">
          {
            serviceData.map((item,index)=>(
              <div className="services-item" key={index}>
              <span className='service_icon'><i class={item.icon}></i></span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">
                {item.desc}
              </p>
            </div> 
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Service