import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/iconLogo.png"
import {HiOutlineSearch, HiOutlineMenu} from "react-icons/hi";
import {RxCross2} from "react-icons/rx";
import "./Navbar.css";
import Avatar from '../Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../stores/currentUser/currentUser.action';
import decode from "jwt-decode";
import { activeMenu } from '../../stores/sidebar/sidebar.action';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.currentUser);
  const active = useSelector((store) => store.sidebar);
  const navigate = useNavigate();

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
    navigate('/');
    dispatch(setCurrentUser(null));
  }

  const changeMenu =()=>{
    dispatch(activeMenu(!active));
  }

  // console.log(active)

  useEffect(() => {
    const token = user?.token;
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch]);

  return (
    <>
    <div className='main-nav'>
      <div className='navbar-1'>
        {active ? <RxCross2 fontSize={"25px"} className="menu-option-btn" onClick={changeMenu}/> : 
        <HiOutlineMenu fontSize={"25px"} className="menu-option-btn" onClick={changeMenu}/>
        }
        <Link className={'navlink-logo'} to={"/"}>
          <img src={logo} alt='' width={"40px"}/>
          <span className='logo-text'>Stack</span>
          <span className='logo-text' style={{fontWeight: "bold"}}>overflow</span>
        </Link>
        <Link className={'navlink hide'} to={"/about"}><p>About</p></Link>
        <Link className={'navlink'} to={"/products"}><p>Products</p></Link>
        <Link className={'navlink hide'} to={"/for-teams/subscriptions"}><p>For Teams</p></Link>
      </div>
      <div className='navbar-2'>
        <HiOutlineSearch className='serach-icon'/>
        <input type="text" placeholder='Search...'/>
      </div>
      <div className='navbar-3'>
        {user ? (
          <div className='log-out-box'>
          <Link to={`/users/${user?.result?._id}`} style={{textDecoration: "none"}}>
            <Avatar backgroundColor={'#009dff'} py="5px" px={'12px'} borderRadius="50%" color='white' fontSize={"20px"}>
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar> 
          </Link>
          <button className='login-btn' onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <Link to={"/auth"}><button className='login-btn'>Log in</button></Link>
        )}
      </div>
    </div>
    </>
  )
}

export default Navbar;