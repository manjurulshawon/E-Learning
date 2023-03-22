import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import SlickSlider from "react-slick";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true
  };
  return (
   <div>
     <SlickSlider {...settings}>
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
