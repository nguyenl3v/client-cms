import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slider2 from "react-slick";
import { API } from "../config/defaultApi";
import styled from "styled-components";

export default function SlickThumbnails({ image, setting }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setslider1] = useState(null);
  const [slider2, setslider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [nav1, nav2, slider1, slider2]);
  const settings = setting;
  const productImageThumb = img => {
    return (
      <React.Fragment>
        <Slider
          asNavFor={nav2}
          ref={slider => setslider1(slider)}
          {...settings}
        >
          {img.map((item, index) => (
            <div key={index}>
              <img src={`${API}/upload/product/${item}`} alt="productThumb" />
            </div>
          ))}
        </Slider>
      </React.Fragment>
    );
  };
  const productImageThumb2 = img => {
    return (
      <StyledSlickThumbnails>
        <Slider2
          asNavFor={nav1}
          ref={slider => setslider2(slider)}
          slidesToShow={img.length > 4 ? 4 : img.length}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {img.map((item, index) => (
            <div key={index}>
              <img src={`${API}/upload/product/${item}`} alt="productThumb" />
            </div>
          ))}
        </Slider2>
      </StyledSlickThumbnails>
    );
  };
  return (
    <React.Fragment>
      <div>{productImageThumb(image)}</div>
      <div>{image.length > 0 && productImageThumb2(image)}</div>
    </React.Fragment>
  );
}

const StyledSlickThumbnails = styled.div`
`;
