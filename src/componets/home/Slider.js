import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import img3 from "../../assets/images/slider/slider-1.jpg";
import img4 from "../../assets/images/slider/slide4.jpg";
import img5 from "../../assets/images/slider/slide5.jpg";
import img6 from "../../assets/images/slider/slide6.jpg";
import img7 from "../../assets/images/slider/slide7.jpg";
import SlickSlider from "react-slick";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    // cssEase: "linear"
  };
  return (
    <div>
      <SlickSlider {...settings}>
        <div>
          <div>
            <img src={img3} />
          </div>
        </div>
        <div>
          <div>
            <img src={img7} />
          </div>
        </div>
        <div>
          <div>
            <img src={img6} />
          </div>
        </div>
        {/* <div>
          <div>
            <img src={img1} />
          </div>
        </div>
        <div>
          <div>
            <img src={img2} />
          </div>
        </div> */}
         <div>
          <div>
            <img src={img5} />
          </div>
        </div>
        {/* <div>
          <img src={img4} />
        </div> */}
      </SlickSlider>
    </div>
  );
};

export default Slider;
