import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '.././images/img1.jpg'
import img2 from '.././images/img2.jpg'
import img3 from '.././images/img3.jpg'
import img4 from '.././images/img4.jpg'
import './Slider.css'

const Slider = () => {
  return (
    <>
            <Carousel className='slide'>
                <Carousel.Item interval={2000}>
                    <img style={{height:'70vh'}}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>DEFEND_X</h4>
                        <h1>Personal Protection</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img style={{height:'70vh'}}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>DEFEND_X</h4>
                        <h1>Property Guarding</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'70vh'}}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>DEFEND_X</h4>
                        <h1>Event Security</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'70vh'}}
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h4>DEFEND_X</h4>
                        <h1>Security Driver</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
  )
}

export default Slider