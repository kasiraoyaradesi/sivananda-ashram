import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import n3 from '../assets/n3.JPG';
import n4 from '../assets/n4.JPG';
import n6 from '../assets/n6.jpg';
import n7 from '../assets/n7.jpg';
import swami from '../assets/swami.JPG';
import "./SimpleSlider.css"; 
import KnowMore from "./KnowMore";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted for smoother transitions
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true // Ensures height adapts to different image heights
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={swami} alt='slide' />
        </div>
        <div>
          <img src={n3} alt="Slide 1" />
        </div>
        <div>
          <img src={n4} alt="Slide 2" />
        </div>
        <div>
          <img src={n7} alt="Slide 3" />
        </div>
        <div>
          <img src={n6} alt="Slide 5" />
        </div>
      </Slider>
      <KnowMore />
    </div>
  );
}
