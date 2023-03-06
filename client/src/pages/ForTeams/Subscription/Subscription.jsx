import React, { useState } from 'react';
import "./Subscription.css";
import r_logo from "../../../assets/razorpay_logo.png";
import {RxCross2} from "react-icons/rx";
import useRazorpay from 'react-razorpay';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paymentGateway } from '../../../stores/payment/payment.action';


const Subscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [plansName, setPlansName] = useState("free");
  const [plansAmount, setPlansAmount] = useState(0);
  const Razorpay = useRazorpay();
  const {message, payment_id} = useSelector((store) => store.payment);

  const openModal = (plansN, plansA) =>{

    if(plansN==="Free"){
      navigate("/auth");
    }
    setModal(true);
    setPlansName(plansN);
    setPlansAmount(plansA);
  }


  console.log(message, payment_id);

  const handlePayment = async (params) => {
    dispatch(paymentGateway(params, navigate, Razorpay));
  };

  return (
    <>
    <div className='subscription-container'>
      <h1>Stack Overflow Subscription Plans</h1>
      <p>We have a plan to fit the knowledge management and post questions in stackoverflow.</p>
      <div className='plans-container'>
        <div className='planCards'>
          <p className='plan-name'>Free</p>
          <h2 className='price'>Free</h2>
          <div className='features'>
            <h4>Features</h4>
            <li>Post only 1 question a day</li>
          </div>
          <button onClick={()=>openModal("Free", 0)}>Get strated</button>
        </div>
        <div className='planCards'>
          <p className='plan-name'>Silver plan</p>
          <h2 className='price'>₹100 / month</h2>
          <div className='features'>
            <h4>Features</h4>
            <li>Post only 5 question a day</li>
          </div>
          <button onClick={()=>openModal("Silver plan", 100)}>Get strated</button>
        </div>
        <div className='planCards'>
          <p className='plan-name'>Gold plan</p>
          <h2 className='price'>₹1000 / month</h2>
          <div className='features'>
            <h4>Features</h4>
            <li>Post unlimited question</li>
          </div>
          <button onClick={()=>openModal("Gold plan", 1000)}>Get strated</button>
        </div>
      </div>
    </div>
    {modal && <div className='modal'>
      <div className='modalpop'>
        <div style={{display: "flex", justifyContent: "end"}}><RxCross2 cursor={"pointer"} fontSize="20px" onClick={()=> setModal(false)}/></div>
        <div className='payment-wish'>
          <h2>Welcome to razorpay</h2>
          <img width="150px" src={r_logo}/>
          <p>Selected Plans:- {plansName}</p>
          <p>Total amout pay of you:- ₹{plansAmount}</p>
          <button onClick={()=>handlePayment(plansAmount)}>Pay Now</button>
       </div>
      </div>
    </div>}
    </>
  )
}

export default Subscription