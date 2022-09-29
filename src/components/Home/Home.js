import React from 'react';
import { useState,useEffect } from 'react';
import logo from '../../images/logo.png'
import Activity from '../Activity/Activity'
import Blog from '../Blog/Blog';
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
    const handleCart = (activity) =>{
        console.log(activity);
       
       const newCart = [...cart,activity]
       setCart(newCart)
       
    }
   
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
                    {
                    activities.map((activity => <Activity 
                        activity={activity} 
                        key={activity?.id} 
                        handleCart ={handleCart}
                       >

                        </Activity>))
                }
                    </div>
                </div>
                <div className="right-side">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className='blog'>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;