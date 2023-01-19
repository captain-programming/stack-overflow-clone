import React from 'react'
import { Navigate } from 'react-router-dom';
import "./AskQuestion.css";

const AskQuestion = () => {
  const user = "null";

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
          <form>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagine you're asking a question to another person</p>
                <input type="text" id='ask-ques-title' placeholder='e.g. is there an R function for finding the index of an elemnt in a vector?'/>
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Include all the information someone would need to answer your question</p>
                <textarea id='ask-ques-body' cols="30" rows="10"/>
              </label>
              <label htmlFor="ask-ques-tags">
                <h4>Tags</h4>
                <p>Add up to 5 tags to describe what your question in about</p>
                <input type="text" id='ask-ques-title' placeholder='e.g. (xml typescript wordpress)'/>
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