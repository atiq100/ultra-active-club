import React from 'react';
import { useState,useEffect } from 'react';
import logo from '../../images/logo.png'
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const [activities,setActivities] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);
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
                        <Activities activities={activities} cart={cart} setCart={setCart}></Activities>
                    </div>
                </div>
                <div className="right-side">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;