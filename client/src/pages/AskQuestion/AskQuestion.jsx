import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./AskQuestion.css";
import {useDispatch, useSelector} from "react-redux";
import { useState } from 'react';
import { askQuestion } from '../../stores/questions/question.action';

const AskQuestion = () => {
  const user = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionInfo, setQuestionInfo] = useState({});

  const onchangeHandler = (e) =>{
    const {name, value} = e.target;

    if(name==="questionTags"){
      setQuestionInfo({
        ...questionInfo,
        [name]: value.split(" "),
      })
    }else{
      setQuestionInfo({
        ...questionInfo,
        [name]: value,
      })
    }
  }

  const submitQuestion =(e)=>{
    e.preventDefault();
    dispatch(askQuestion({...questionInfo, userPosted: user?.result?.name, userId: user?.result?._id}, navigate))
  }

  // console.log(user?.result._id);

  return (
    <>
    {user === null ? 
      <>
        {alert("login or signup to ask a question")}
        <Navigate to={'/auth'} />
      </> : 
      <div className='ask-question'>
        <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
          <form onSubmit={submitQuestion}>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagine you're asking a question to another person</p>
                <input name='questionTitle' type="text" id='ask-ques-title' placeholder='e.g. is there an R function for finding the index of an elemnt in a vector?' onChange={onchangeHandler}/>
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Include all the information someone would need to answer your question</p>
                <textarea name='questionBody'  id='ask-ques-body' cols="30" rows="10" onChange={onchangeHandler}/>
              </label>
              <label htmlFor="ask-ques-tags">
                <h4>Tags</h4>
                <p>Add up to 5 tags to describe what your question in about</p>
                <input name='questionTags' type="text" id='ask-ques-title' placeholder='e.g. (xml typescript wordpress)' onChange={onchangeHandler}/>
              </label>
            </div>
            <input type={'submit'} value="Review your question" className='review-btn'/>
          </form>
        </div>
      </div>}
    </>
  )
}

export default AskQuestion;