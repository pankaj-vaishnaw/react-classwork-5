import React from 'react';
import Carousel from './Carousel';

const MainSection = () => {
  return (
    <>
    <div className="p-8">
      <div className="mb-8">
        {/* <h2 className="text-2xl font-bold mb-4">Featured Carousel</h2> */}
        <Carousel />
      </div>
      <div className='about'>
        <h2 className="text-2xl font-bold mb-4 ">Think Health and Think Massage</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec urna vel libero volutpat
          lacinia. Sed tincidunt, justo eu laoreet scelerisque, tellus dui fringilla odio, quis
          bibendum sem ante vel ligula.
        </p>
        <div className='btn-div'>

        <button>Learn more about us</button>
        <button>Contact Us Today</button>
        </div>
      </div>
      <div className='second-about-div'>
        <p style={{color:'#991F48'}}>are you looking for a professional registered massage therapist? Sample Massage therapy has 4 registered massage therapist who can provide clical massage </p>
        <br/>
        <p>are you looking for a professional registered massage therapist? Sample Massage therapy has 4 registered massage therapist who can provide clical massage </p>
        <br/>
        <p>are you looking for a professional registered massage therapist? Sample Massage therapy has 4 registered massage therapist who can provide clical massage </p>
        <br/>
      </div>
      <div className='third-about-div'>
        <h1 className='family'>family Wellness massage therapy </h1>
        <p>village name ranawas rajasthan india</p>
      </div>
    </div>
    </>
  );
};

export default MainSection;