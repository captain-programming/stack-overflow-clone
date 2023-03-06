import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import "../Home/Home.css"
import QuestionDetails from './QuestionDetails';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar />
      </div>
      <div className='questions-container-2'>
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home;