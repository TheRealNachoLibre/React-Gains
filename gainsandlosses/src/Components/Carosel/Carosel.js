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
