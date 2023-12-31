import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import httpAction from "../../store/actions/httpAction";
import { useDispatch } from "react-redux";
import urlList from "../../store/utils/urlList";
const CustomSlider = () => {
  const [slide, setSlide] = useState();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const list = urlList();
  const data = {
    url: list.loadSlider,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const result = await dispatch(httpAction(data));
      setSlide(result);
    };

    getData();
  }, [dispatch]);

  return (
    <div className="slider-main">
      <Slider {...settings}>
        {slide &&
          slide.formatedSlider.map((sli, index) => {
            return (
              <div key={index} className="slider-slides">
                <img src={sli.image} alt={sli._id} className="slider-slide" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
