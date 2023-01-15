import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Auth from './Auth/Auth';
import ForTeams from './ForTeams';
import Home from './Home/Home';
import Products from './Products';
import Profile from './Profile';

const AllRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/for-teams' element={<ForTeams />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  )
}

export default AllRouters;