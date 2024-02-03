import React from 'react'
import Slider from '../../Slider/Slider'
import Companies from '../../Companies/Companies'
import Banner from '../../Banner/Banner'
import Hero from '../../Hero/Hero'
import ImageSlider from '../../ImageSlider/ImageSlider'


const Home = () => {
  return (
    <>
    <Slider />
    <Companies />
    <br></br>
    <Banner />
    <br></br>
    <Hero />
    <ImageSlider />
    </>
  )
}

export default Home