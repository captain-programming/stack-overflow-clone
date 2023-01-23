import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsComponent = ({question}) => {

  return (
    <div className='display-question-container'>
      <div className="display-votes-ans">
        <p>{question.upVote?.length || 0 - question.downVote?.length || 0}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/questions/${question._id}`} className="question-title-link">{question.questionTitle}</Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {
              question.questionTags?.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <p className='display-time'>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuestionsComponent;