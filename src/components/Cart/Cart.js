import React from 'react';
import image from '../../images/avatar.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props
    console.log(cart);
     let totalTime = 0;
   
    // //let quantity = 0;
     for(const learning of cart){
    //     //quantity = quantity + product.quantity;
        totalTime=totalTime + learning.time;
    //     //shipping = shipping + product.shipping
     } 

    const handleToast =()=>{
       
        toast.success("Wow you completed today tasks!");
    }
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
            <div className="">
                <h3>Learning Details</h3>
                <div className="break-btn">
                    <h4>Learning Time</h4>
                    <p>{totalTime} min</p>
                </div>
            </div>
            <div className=""><br></br>
                <div className="break-btn">
                    <h4>Break Time</h4>
                    <p>200 min</p>
                </div><br></br>
                <button className='card-btn'onClick={handleToast}>Activity completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;