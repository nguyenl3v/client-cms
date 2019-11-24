import React from "react";
import { API } from "../../config/defaultApi";
import styled from "styled-components";
import SlideSlick from "../../react-slick/SlideSlick";
import ReactPlyr from "../../plyr/ReactPlyr";


export default function SlideShow({ slideshow }) {
  const { data } = slideshow;
  const setting = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id="slideshow">
      <div className="container">
        <div className="row">
          <div className="col-3 d-md-none d-lg-block"></div>
          <div className="col-lg-9 col-md-12">
            <SlideSlick setting={setting}>
              {data.length > 0 && data.map((item, index) => (
                <SlideShowWrapper key={index}>
                  <div className="slideshow-wrapper">
                  
                    <div className="slideshow-image">
                      {item.image.match(/\.(mp4)$/) ? (
                        <ReactPlyr image={item.image} />
                      ) : (
                        <img
                          src={`${API}/upload/slideshow/${item.image}`}
                          alt="slidehow"
                        />
                      )}
                    </div>

                    <div className="slideshow-text-content">
                      {item.heading && <h2>{item.heading}</h2>}
                      {item.title && <span>{item.title}</span>}
                      {item.button && (
                        <a href={item.buttonLink}>{item.button}</a>
                      )}
                    </div>

                  </div>
                </SlideShowWrapper>
              ))}
            </SlideSlick>
          </div>
        </div>
      </div>
    </section>
  );
}

const SlideShowWrapper = styled.div`
  .slideshow-wrapper {
    position: relative;
    .slideshow-text-content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  img,
  video {
    max-width: 100%;
    max-height: 413px;
  }
  h2,
  span,
  a {
    color: #ffffff;
    display: block;
  }
  .slideshow-text-content span {
    padding: 25px 0px;
  }
  a {
    padding: 15px 50px;
    font-size: 14px;
    border-radius: 5px;
    background: #0087f4;
    text-decoration: none;
    display: inline-block;
  }
`;
