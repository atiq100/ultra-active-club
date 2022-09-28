import React from 'react';
import logo from '../../images/logo.png'
import Activities from '../Activities/Activities';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <div className="heading">
                        <img src={logo} alt="" className='logo-img' />
                        <span className='heading-text'> English-Language-Club</span>
                    </div>
                    <h3 className='learning-text'>Select Todays Learning</h3>
                    <div className="activity-container">
                        <Activities></Activities>
                    </div>
                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    );
};

export default Home;