import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./HomeMainbar.css";
import QuestionsComponent from './QuestionsComponent';

const HomeMainbar = () => {

  const questionsList=[
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

  const location = useLocation();

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
        }
        <Link to={'/ask-question'} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} questions</p>
            <>
              {
                questionsList.map((question)=>(
                  <QuestionsComponent question={question} key={question.id}/>
                ))
              }
            </>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar