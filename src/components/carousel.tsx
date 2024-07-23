import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.css'


const CarouselFadeExample: React.FC = () => {
  return (
    <Carousel fade style={{ display: 'block', width: '95%', margin: '0 auto' }} >
      <Carousel.Item className="carousel-item" style={{ backgroundImage: `url("/img1.png")` }}></Carousel.Item>
      <Carousel.Item className="carousel-item" style={{ backgroundImage: `url("/img2.png")` }}></Carousel.Item>
      <Carousel.Item className="carousel-item"  style={{ backgroundImage: `url("/img3.png")` }}></Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
