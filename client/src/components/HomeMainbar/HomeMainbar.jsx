import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./HomeMainbar.css";
import QuestionsComponent from './QuestionsComponent';
import {useDispatch, useSelector} from "react-redux";
import { getQuestion } from '../../stores/questions/question.action';


const HomeMainbar = () => {
  const location = useLocation();
  const {questionsList} = useSelector((store) => store.question);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getQuestion());
  }, [dispatch])

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
                questionsList?.map((question)=>(
                  <QuestionsComponent question={question} key={question._id}/>
                ))
              }
            </>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar;