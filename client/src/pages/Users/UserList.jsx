import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import "./Users.css";


const UserList = () => {
  const {allUserData} = useSelector((store) => store.users);

  // console.log(allUserData);
  

  return (
    <div className='user-list-container'>
      {
        allUserData?.map((user)=>(
          <User user={user} key={user?._id} />
        ))
      }
    </div>
  )
}

export default UserList