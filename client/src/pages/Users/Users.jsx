import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import {fetchAllUsersFun } from "../../stores/auth/auth.action";
import UserList from './UserList';

const Users = () => {
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(fetchAllUsersFun())
  }, [dispatch])

  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar />
      </div>
      <div className='home-container-2' style={{marginTop: "-10px"}}>
        <h1 style={{fontWeight: "400"}}>Users</h1>
        <UserList />
      </div>
    </div>
  )
}

export default Users