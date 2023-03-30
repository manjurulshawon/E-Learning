import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import img3 from "../../assets/images/slider/slider-1.jpg";
import SlickSlider from "react-slick";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    arrows: true
    // cssEase: "linear"
  };
  return (
   <div>
     <SlickSlider {...settings}>
      <div>
        <div><img src={img3} /></div>
      </div>
      <div>
        <div><img src={img1} /></div>
      </div>
      <div>
        <div>
        <img src={img2} />
        </div>
      </div>
    </SlickSlider>
   </div>
  );
};

export default Slider;
