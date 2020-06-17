import React from 'react';

import Img1 from '../../assets/img/Rectangle_9.png';
import Img2 from '../../assets/img/Rectangle_10.png';
import Img3 from '../../assets/img/Rectangle_11.png';

const Hero = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h3 className='hero-title-header'>Premiere Now</h3>
          <h1 className='hero-title'>Wonder Women 1984</h1>
          <h4 className='hero-title-category'>Action</h4>
          <div className='buttons'>
            <a href='register.html' className='hero-button'>
              Watch Now
            </a>
          </div>
        </div>
        <div className='image-preview'>
          <img src={Img1} alt='' />
          <img src={Img2} alt='' />
          <img src={Img3} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
