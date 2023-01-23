import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import {HiOutlineSearch} from "react-icons/hi";
import "./Navbar.css";
import Avatar from '../Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../stores/currentUser/currentUser.action';
import decode from "jwt-decode";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.currentUser);
  const navigate = useNavigate();

  // console.log(user);

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
    navigate('/');
    dispatch(setCurrentUser(null));
  }

  useEffect(() => {
    const token = user?.token;
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
      // console.log(decodedToken.exp);
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch]);

  return (
    <nav className='main-nav'>
      <div className={'navbar'}>
      <Link to={'/'} className={'nav-item nav-logo'}>
        <img src={logo} alt='logo' width={'140px'}/>
      </Link>
      <Link to={'/about'} className='nav-item nav-btn'>About</Link>
      <Link to={'/products'} className='nav-item nav-btn'>Products</Link>
      <Link to={'/for-teams'} className='nav-item nav-btn'>For Teams</Link>
      <form>
        <input type={'text'} placeholder='Search...'/>
        <HiOutlineSearch className='search-icon'/>
      </form>
      {user ? (
        <div className='log-out-box'>
        <Link to={`/users/${user?.result?._id}`} style={{textDecoration: "none"}}>
          <Avatar backgroundColor={'#009dff'} py="5px" px={'10px'} borderRadius="50%" color='white'>
            {user.result.name.charAt(0).toUpperCase()}
          </Avatar> 
        </Link>
        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <Link to='/auth' className='nav-item nav-links'>Log in</Link>
      )}
    </div>
    </nav>
  )
}

export default Navbar