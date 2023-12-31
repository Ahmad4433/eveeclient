import React, { useEffect, useRef } from "react";
import "./MiniSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const MiniSlider = ({ data }) => {
  const sliderRef = useRef();
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  const imgIndex = useSelector((state) => state.thumbnil.imgIndex);

  useEffect(() => {
    sliderRef.current.slickGoTo(imgIndex);
  }, [imgIndex]);

  return (
    <div className="mini-main">
      <Slider ref={sliderRef} {...settings}>
        {data &&
          data.map((img, index) => {
            return (
              <div key={index} className="mini-slides">
                <img src={img} alt="slide" className="mini-slide" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MiniSlider;
