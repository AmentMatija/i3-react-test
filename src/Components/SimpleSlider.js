import React,  {Component} from 'react';
import Slider from "react-slick";

export default class SimpleSlider extends Component {
   render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,      
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>        
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/img1.jpg"} alt="image1"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/img2.jpg"} alt="image2"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/img3.jpg"} alt="image3"/>
          </div>         
        </Slider>

      </div>
    );
  }
}



      