import React from 'react';
import Img1 from '../../assets/img/Rectangle_3@2x.png';
import Img2 from '../../assets/img/Rectangle_4@2x.png';
import Img3 from '../../assets/img/Rectangle_5@2x.png';

import NottingHill from '../../assets/img/English_Movie_poster_db.png';
import RecentShow from '../../assets/img/MV5BMTU3MzU3NzI3MV5BMl5BanBnXk.png';
import KingSpeech from '../../assets/img/Rectangle_13.png';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-left'>
        <div className='home-left-header'>
          <p>Trending</p>
          <p>
            More <i className='fas fa-chevron-right'></i>
          </p>
        </div>
        <div className='home-left-body'>
          <img src={Img1} alt='' />
          <img src={Img2} alt='' />
          <img src={Img3} alt='' />
        </div>
        <div className='home-left-footer'>
          <div className='home-left-footer-left'>
            <p className='home-left-footer-left-title'>Recent Playing</p>
            <div className='recent-playing'>
              <img src={KingSpeech} alt='' />
              <div>
                <p className='premiere-movie-name'>The King's Speech</p>
                <p className='premiere-date'>20 April 2020</p>
              </div>
              <div>
                <p className='premiere-movie-name'>20:40 PM</p>
                <p className='premiere-date'>50 min</p>
              </div>
            </div>
            <div className='recent-playing'>
              <img src={KingSpeech} alt='' />
              <div>
                <p className='premiere-movie-name'>The King's Speech</p>
                <p className='premiere-date'>20 April 2020</p>
              </div>
              <div>
                <p className='premiere-movie-name'>20:40 PM</p>
                <p className='premiere-date'>50 min</p>
              </div>
            </div>
            <div className='recent-playing'>
              <img src={KingSpeech} alt='' />
              <div>
                <p className='premiere-movie-name'>The King's Speech</p>
                <p className='premiere-date'>20 April 2020</p>
              </div>
              <div>
                <p className='premiere-movie-name'>20:40 PM</p>
                <p className='premiere-date'>50 min</p>
              </div>
            </div>
          </div>
          <div className='home-left-footer-right'>
            <div>
              <p>Recent Show</p>
              <p>
                More <i className='fas fa-chevron-right'></i>
              </p>
            </div>
            <img src={RecentShow} alt='' />
          </div>
        </div>
      </div>

      <div className='home-right'>
        <div className='home-right-header'>
          <p>Coming Soon</p>
          <p>
            More <i className='fas fa-chevron-right'></i>
          </p>
        </div>
        <div className='home-right-body'>
          <div className='home-right-card'>
            <img src={NottingHill} alt='' />
            <div className='home-right-card-desc'>
              <h1>Notting Hill</h1>
              <h2>Premiere In</h2>
              <h3>20 April 2020</h3>
            </div>
          </div>
          <div className='home-right-card'>
            <img src={NottingHill} alt='' />
            <div className='home-right-card-desc'>
              <h1>Notting Hill</h1>
              <h2>Premiere In</h2>
              <h3>20 April 2020</h3>
            </div>
          </div>
          <div className='home-right-card'>
            <img src={NottingHill} alt='' />
            <div className='home-right-card-desc'>
              <h1>Notting Hill</h1>
              <h2>Premiere In</h2>
              <h3>20 April 2020</h3>
            </div>
          </div>
          <div className='home-right-card'>
            <img src={NottingHill} alt='' />
            <div className='home-right-card-desc'>
              <h1>Notting Hill</h1>
              <h2>Premiere In</h2>
              <h3>20 April 2020</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
