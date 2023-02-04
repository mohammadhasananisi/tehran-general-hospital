import React from "react";
// import ReactFancyBox from "react-fancybox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
const Gallery = (props) => {
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="title-top">گالری تصاویر بیمارستان</h3>
      </div>

      <Slider {...settings} swipe={true}>
        {props.gallery.map((ga) => {
          return (
            <img src={ga.gallery_image} alt={ga.gallery_image} key={ga.gallery_image} />
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
