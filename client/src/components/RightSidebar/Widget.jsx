import React from 'react';
import {FaPen, FaCommentAlt} from "react-icons/fa";
import blackLogo from "../../assets/stack-overflow-black.png";

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <FaPen fontSize={'30px'}/>
          <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <FaPen fontSize={'21px'}/>
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <FaCommentAlt fontSize={'19px'}/>
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className='right-sidebar-div-2'>
          <FaCommentAlt fontSize={'30px'}/>
          <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
          </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="" width={20}/>
          <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget;