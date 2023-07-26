import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import jestImage from '../assets/jest.svg';
import htmlImage from '../assets/html.png';
import dockerImage from '../assets/docker.png';
import cssImage from '../assets/css.png'
import jsImage from '../assets/js.svg'
import reactImage from '../assets/react.svg';
import rtlImage from '../assets/rtl.svg';
import nodeImage from '../assets/node.png';
import expressImage from '../assets/express.png';
import mysqlImage from '../assets/mysql.png';
import sequelizeImage from '../assets/sequelize.png';
import reduxImage from '../assets/redux.svg';
import tyImage from '../assets/ty.svg';
import githubImage from '../assets/github.png';
import gitImage from '../assets/git.png';
import './SliderImages.css';

export default class SliderImages extends Component {
  
  render() {
    const images = [nodeImage,
      reactImage,
      jestImage,
      htmlImage,
      dockerImage,
      cssImage,
      jsImage,
      rtlImage,
      expressImage,
      mysqlImage,
      sequelizeImage,
      reduxImage,
      tyImage,
      gitImage, githubImage ];

      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
      };

    return (
      <div className="slider">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image} className="slider__div" >
              <img src={image} alt={`logotipo de ${image}`}  className="slider__image" />
            </div>
        ))}
        </Slider>
      </div>
    );;
  }
};
