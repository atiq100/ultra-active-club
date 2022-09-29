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
        </div>
    );
};

export default Cart;