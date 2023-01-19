import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import {HiOutlineSearch} from "react-icons/hi";
import "./Navbar.css";
import Avatar from '../Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../stores/currentUser/currentUser.action';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.currentUser);

  console.log(user);

  useEffect(() => {
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
        <Link to='/profile' style={{textDecoration: "none"}}>
          <Avatar backgroundColor={'#009dff'} py="5px" px={'10px'} borderRadius="50%" color='white'>
            D
          </Avatar> 
        </Link>
        <button className='nav-item nav-links'>Log out</button>
        </div>
      ) : (
        <Link to='/auth' className='nav-item nav-links'>Log in</Link>
      )}
    </div>
    </nav>
  )
}

export default Navbar