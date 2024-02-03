import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import './Testimonial.css'
import { EffectCards } from "swiper/modules";
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t3 from '../images/t3.jpg'

export default function Testimonial() {
  return (
    <section>
      <div  className="container sliders">
        <h2 className="section_title">Testimonials</h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide_item">
            <div className="slide_img-01"><img src={t1} alt='' /></div>
            <h2>John Doe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque molestiae pariatur sit! Vel nihil, harum veniam nam commodi aspernatur! Ea rem eligendi, sequi in harum et aliquam mollitia sint.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img-02"><img src={t2} alt='' /></div>
            <h2>Robert Smith</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque molestiae pariatur sit! Vel nihil, harum veniam nam commodi aspernatur! Ea rem eligendi, sequi in harum et aliquam mollitia sint.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img-03"><img src={t3} alt='' /></div>
            <h2>Andrew  Johnson</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque molestiae pariatur sit! Vel nihil, harum veniam nam commodi aspernatur! Ea rem eligendi, sequi in harum et aliquam mollitia sint.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

