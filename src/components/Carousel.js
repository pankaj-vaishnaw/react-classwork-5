import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <Slider {...settings}>
      <div className='carousel-div'>
        <img src="https://media.istockphoto.com/id/519368348/vector/fitness-and-sport.jpg?s=612x612&w=0&k=20&c=LdZAQ0BJ5aLMT_CAmgLRnoDs2U0x8l_CpJzk9vsiANI=" alt="Carousel 1" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/904417522/vector/healthy-lifestyle-concept-illustration.jpg?s=612x612&w=0&k=20&c=VbBOR917zpuzOgumN68lNci8ApIF2_9hnYR_TdH-0B0=" alt="Carousel 2" />
      </div>
      {/* Add more carousel items as needed */}
    </Slider>
  );
};

export default Carousel;
