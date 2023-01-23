import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteQuestionFun, getQuestionByIdFun, postAnswerFun, voteQuestionFun } from '../../stores/questions/question.action';
import moment from "moment";
import copy from "copy-to-clipboard";
import { useEffect } from 'react';

const QuestionDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {questionsSelf} = useSelector((store) => store.question);
  const [answer, setAnswer] = useState("");
  const user = useSelector((store) => store.currentUser);
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) =>{
    e.preventDefault();
    if(user === null){
      alert("Login or Signup to answer a question");
      navigate('/auth');
    }else{
      if(answer === ""){
        alert('Enter an answer before submitting');
      }else{
        dispatch(postAnswerFun({id, noOfAnswers: answerLength + 1, answerBody: answer, userAnswered: user.result.name, userId: user.result._id}));
      }
    }

    setAnswer("");
  };

  const handleShare =()=>{
    // console.log("ok")
    copy(url+location.pathname);
    alert('Copied url: ' + url+location.pathname);
  }

  const handleDelete =()=>{
    dispatch(deleteQuestionFun(id, navigate));
  }

  // console.log()

  const handleUpVotes = () =>{
    dispatch(voteQuestionFun(id, 'upVote', user.result._id))
  }

  const handleDownVotes = ()=>{
    dispatch(voteQuestionFun(id, 'downVote', user.result._id))
  }

  useEffect(()=>{
    dispatch(getQuestionByIdFun(id));
  }, [dispatch, id])

  return (
    <div className='question-details-page'>
      {
        questionsSelf === null ? 
        <h1>Loading...</h1> : 
        <>
          {
            // qquestionsSelf?.filter((question) => question._id===id).map((question) => (
              <div key={questionsSelf._id}>
                <section className='question-details-container'>
                  <h1>{questionsSelf.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <AiFillCaretUp className='votes-icon' onClick={handleUpVotes}/>
                      <p>{questionsSelf.upVote?.length || 0 -questionsSelf.downVote?.length || 0}</p>
                      <AiFillCaretDown className='votes-icon' onClick={handleDownVotes}/>
                    </div>
                    <div style={{width: "100%"}}>
                      <p className='question-body'>
                        {questionsSelf.questionBody}
                      </p>
                      <div className="question-details-tags">
                        {
                          questionsSelf.questionTags?.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))
                        }
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type='button' onClick={handleShare}>Share</button>
                          
                          {user.result._id===questionsSelf.userId && 
                          <button type='button' onClick={handleDelete}>Delete</button>}
                        </div>

                        <div>
                          <p>asked {moment(questionsSelf.askedOn).fromNow()}</p>
                          <Link to={`/user/${questionsSelf.userId}`} className='user-link' style={{color: "#0086d8"}}>
                            <Avatar backgroundColor={"orange"} px='8px' py='5px'>
                              {questionsSelf.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                              {questionsSelf.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                  questionsSelf.noOfAnswers !== 0 && (
                    <section>
                      <h3>{questionsSelf.noOfAnswers} answers</h3>
                      <DisplayAnswer key={questionsSelf._id}  question={questionsSelf} handleShare={handleShare}/>
                    </section>
                  )
                }
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=> handlePostAns(e, questionsSelf.answer.length)}>
                    <textarea value={answer} name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea>
                    <br/>
                    <input type={'Submit'} className='post-ans-btn' defaultValue={'Post Your Answer'}/>
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      questionsSelf.questionTags.map((tag)=>(
                        <Link to={'/tags'} key={tag} className='ans-tag'> {tag} </Link>
                      ))
                    } <span>or </span>
                    <Link to={'/ask-question'} style={{textDecoration: "none", color:"#009dff"}}>
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails;