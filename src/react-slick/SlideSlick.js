import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SlideSlick({ children,setting }) {
  const settings = setting;
  return <Slider {...settings}>{children}</Slider>;
}
