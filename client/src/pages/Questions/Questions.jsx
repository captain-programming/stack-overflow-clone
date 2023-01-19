import React from 'react';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import "../Home/Home.css";

const Questions = () => {
  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar />
      </div>
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Questions;