import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';

const questionsList=[
  {
    id: '1',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "node js", "mongo"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "kumar",
        answeredOn: "jan 2",
        userId: 2,
      }
    ]
  },
  {
    id: '2',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "node js", "mongo"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "kumar",
        answeredOn: "jan 2",
        userId: 2,
      }
    ]
  },
  {
    id: '3',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["Java", "node js", "mongo"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [
      {
        answerBody: "Answer",
        userAnswered: "kumar",
        answeredOn: "jan 2",
        userId: 2,
      }
    ]
  },
];

const QuestionDetails = () => {
  const {id} = useParams();

  return (
    <div className='question-details-page'>
      {
        questionsList === null ? 
        <h1>Loading...</h1> : 
        <>
          {
            questionsList.filter((question) => question.id===id).map((question) => (
              <div key={question.id}>
                <section className='question-details-container'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <AiFillCaretUp className='votes-icon'/>
                      <p>{question.upVotes - question.downVotes}</p>
                      <AiFillCaretDown className='votes-icon'/>
                    </div>
                    <div style={{width: "100%"}}>
                      <p className='question-body'>
                        {question.questionBody}
                      </p>
                      <div className="question-details-tags">
                        {
                          question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))
                        }
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type='button'>Share</button>
                          <button type='button'>Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link to={`/user/${question.userId}`} className='user-link' style={{color: "#0086d8"}}>
                            <Avatar backgroundColor={"orange"} px='8px' py='5px'>
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} answers</h3>
                      <DisplayAnswer key={question.id}  question={question}/>
                    </section>
                  )
                }
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br/>
                    <input type={'Submit'} className='post-ans-btn' value={'Post Your Answer'}/>
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      question.questionTags.map((tag)=>(
                        <Link to={'/tags'} key={tag} className='ans-tag'> {tag} </Link>
                      ))
                    } <span>or </span>
                    <Link to={'/ask-question'} style={{textDecoration: "none", color:"#009dff"}}>
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails