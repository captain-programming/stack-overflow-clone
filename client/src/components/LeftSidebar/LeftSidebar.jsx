import React from 'react'
import {NavLink} from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import "./LeftSidebar.css";
import { useSelector } from 'react-redux';

const LeftSidebar = () => {
  const active = useSelector((store) => store.sidebar);

  return active ? (
  <div className='activeSidebar'>
    <nav className='side-nav'>
        <NavLink to="/" className={'side-nav-links'}>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to={'/questions'} className={'side-nav-links'}>
            <BiWorld fontSize={'20px'}/>
            <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>
          <NavLink to={'/tags'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to={'/users'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Users</p>
          </NavLink>
          <NavLink to={'/for-teams/subscriptions'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Subscriptions</p>
          </NavLink>
        </div>
      </nav>
  </div>) : (
    <div className="left-sidebar">
      <nav className='side-nav'>
        <NavLink to="/" className={'side-nav-links'}>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to={'/questions'} className={'side-nav-links'}>
            <BiWorld fontSize={'20px'}/>
            <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>
          <NavLink to={'/tags'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to={'/users'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Users</p>
          </NavLink>
          <NavLink to={'/for-teams/subscriptions'} className={'side-nav-links'} style={{paddingLeft: "40px"}}>
            <p>Subscriptions</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar