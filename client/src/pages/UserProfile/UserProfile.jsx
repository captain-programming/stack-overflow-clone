import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from "../../components/Avatar/Avatar";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUsersByIdFun } from '../../stores/auth/auth.action';
import {FaBirthdayCake, FaPen} from "react-icons/fa";
import moment from "moment";
import { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import "./UserProfile.css";

const UserProfile = () => {
  const {userInfo} = useSelector((store) => store.users);
  const user = useSelector((store) => store.currentUser);
  const {id} = useParams();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  // console.log(userInfo);

  useEffect(()=>{
    dispatch(fetchUsersByIdFun(id));
  }, [dispatch]);

  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar />
      </div>
      <div className='home-container-2'>
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" color='white' fontSize={'50px'} px='40px' py={'30px'}>
              {userInfo?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{userInfo?.name}</h1>
                <p>
                  <FaBirthdayCake />
                  <span style={{marginLeft: "10px"}}>Joined {moment(userInfo?.joinedOn).fromNow()}</span>
                </p>
              </div>
            </div>
              {user?.result._id === id && (
                <button type='button' onClick={() => setToggle(true)} className = {'edit-profile-btn'}>
                  <FaPen style={{marginRight: "4px"}}/> Edit Profile
                </button>
              )}
          </div>
          <>
          {
            toggle ? (
              <EditProfileForm currentUser={user} setToggle={setToggle}/>
            ):(
              <ProfileBio currentProfile={userInfo}/>
            )
          }
          </>
        </section>
      </div>
    </div>
  )
}

export default UserProfile;