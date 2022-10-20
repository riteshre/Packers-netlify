import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {
  return (
    <div>
        <Carousel className='mt-5'>
      <Carousel.Item interval={1000}>
        <img
          className="car d-block w-100"
          src="https://pmsrelocation.com/blog/wp-content/uploads/2017/02/banner03.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="car d-block w-100"
          src="https://www.alliedpackersandmovers.in/images/head-banner.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="car d-block w-100"
          src="http://www.theprofessionalpackers.in/images/banner3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
  )
}

export default carousel
