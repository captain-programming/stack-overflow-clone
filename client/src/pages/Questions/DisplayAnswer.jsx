import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswersFun } from '../../stores/questions/question.action';
import "./Questions.css";

const DisplayAnswer = ({question, handleShare}) => {
  const user = useSelector((store) => store.currentUser);
  const {id} = useParams();
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch(deleteAnswersFun(id, answerId, noOfAnswers-1))
  }

  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div>
                <button type='button' onClick={handleShare}>Share</button>

                {user.result._id===ans.userId && 
                <button type='button' onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>}
              </div>
              <div>
                <p>answered {moment(ans.answerdOn).fromNow()}</p>
                
                <Link to={`/users/${question.userId}`} className='user-link' style={{color: "#0086d8"}}>
                  <Avatar backgroundColor={"green"} px='8px' py='5px'>
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>
                    {ans.userAnswered}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer