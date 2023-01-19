import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import iconLogo from "../../assets/iconLogo.png"
import { login, signup } from '../../stores/auth/auth.action';
import AboutAuth from './AboutAuth';
import "./Auth.css"

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) =>{
    const {name, value} = event.target;

    setCreds({
      ...creds,
      [name]: value,
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!creds.email && !creds.password){
      alert("Enter email & password");
    }
    if(isSignup){
      if(!creds.name){
        alert("Enter a name to continue");
      }

      dispatch(signup(creds, navigate));
    }else{
      dispatch(login(creds, navigate));
    }
    // console.log(creds);
  }

  const handleSwitch = () =>{
    setIsSignup(!isSignup);
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && <img src={iconLogo} alt='stack overflow' className='login-logo'/>}
        <form onSubmit={handleSubmit}>
          {
            isSignup &&  (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type={'text'} name='name' id='name' onChange={onChange}/>
              </label>
            )
          } 
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type={'email'} name='email' id='email' onChange={onChange}/>
          </label>
          <label htmlFor='password'>
            <div style={{display: "flex", justifyContent:'space-between'}}>
              <h4>Password</h4> 
              {!isSignup &&  <p style={{color: "#007ac6", fontSize: "13px", cursor: "pointer"}}>forgot password?</p>} 
            </div>
            <input type={'password'} name='password' id='password' onChange={onChange}/>
            {isSignup && <p style={{color: "#666767", fontSize: "13px"}}>Passwords must contain at least eight<br/> characters, including at least 1 letter and 1 <br/> number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type={'checkbox'} id='check'/>
                <p style={{fontSize: "13px"}}>Opt-in to receive occasional, <br/> product updates, user research invitations, <br/> company announcements, and digests.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{ isSignup ? "Sign up" : "Log in"}</button>
          {
            isSignup && (
              <p style={{color: "#666767", fontSize: "13px"}}>By clicking “Sign up”, you agree to our  
                <span style={{color: "#007ac6"}}> terms of <br/> service</span>, 
                <span style={{color: "#007ac6"}}> privacy policy</span> and 
                <span style={{color: "#007ac6"}}> cookie policy</span>
              </p>
            )
          }
        </form>
        <p>
          {isSignup ? 'already have an account?' : "Dont have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "Sign up"}</button>
        </p>
      </div>

    </section>

  )
}

export default Auth;