import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './Carosel.css';
import { CaroselItems } from './CaroselItems';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const background = 'https://image.freepik.com/free-vector/black-dark-3d-low-poly-geometric-background_79145-393.jpg'

class SimpleSlider extends React.Component {

    render() {

        return (
            <div className="carousel-box">
                <Slider {...settings}>
                    {CaroselItems.map((items, index) => {
                        return (
                            <div>
                                <img src={items.src} alt={items.alt} />
                                <h3>{items.caption}</h3>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
export default SimpleSlider;
