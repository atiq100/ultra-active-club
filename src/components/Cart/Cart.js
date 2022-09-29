import React from 'react';
import image from '../../images/avatar.jpg'
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <div className="profile">
                <img className='avatar' src={image} alt="" />
                <div className='location'>
                    <h3>Atiqur Rahman</h3>
                    <p >Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className="about">
                <div className="weight">
                    <h2>54</h2>
                    <p>Weight</p>
                </div>
                <div className="weight">
                    <h2>5.5</h2>
                    <p>Height</p>
                </div>
                <div className="weight">
                    <h2>25</h2>
                    <p>Age</p>
                </div>
            </div>
            <div className="break">
                <h3>Add A Break</h3>
                <div className="break-btn">
                    <button className='btn'>10 min</button>
                    <button className='btn'>20 min</button>
                    <button className='btn'>30 min</button>
                    <button className='btn'>40 min</button>
                    <button className='btn'>50 min</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;