import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Auth from './pages/Auth/Auth';
import ForTeams from './pages/ForTeams/ForTeams';
import Subscription from './pages/ForTeams/Subscription/Subscription';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import UserProfile from './pages/UserProfile/UserProfile';
import Users from './pages/Users/Users';

const AllRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/for-teams' element={<ForTeams />}/>
      <Route path='/for-teams/subscriptions' element={<Subscription />}/>
      <Route path='/questions/:id' element={<DisplayQuestion />}/>
      <Route path='/ask-question' element={<AskQuestion />}/>
      <Route path='/tags' element={<Tags/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element={<UserProfile/>}/>
    </Routes>
  )
}

export default AllRouters;