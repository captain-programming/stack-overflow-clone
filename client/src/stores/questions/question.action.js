import * as api from "../../api"

export const askQuestion = (questionData, navigate) => async(dispatch)=>{
  try{
    let {data} = await api.postQuestion(questionData);
    dispatch({type: "POST_QUESTION", payload: data});
    // dispatch(getQuestion())
    navigate('/');
  }catch(err){
    console.log(err);
  }
}

export const getQuestion = () => async(dispatch)=>{
  try{
    let {data} = await api.getAllQuestion();
    dispatch({type: "FETCH_ALL_QUESTION", payload: data});
  }catch(err){
    console.log(err);
  }
}

export const getQuestionByIdFun = (id) => async(dispatch)=>{
  try{
    let {data} = await api.getQuestionById(id);
    dispatch({type: "FETCH_By_Id_QUESTION", payload: data});
  }catch(err){
    console.log(err);
  }
}

export const deleteQuestionFun = (id, navigate) => async(dispatch)=> {
  try{
    const {data} = api.deleteQuestion(id)
    // dispatch(getQuestion())
    navigate('/');
  }catch(err){
    console.log(err);
  }
}

export const voteQuestionFun = (id, value, userId) => async (dispatch)=>{
  try{
    const {data} = await api.voteQuestion(id, value, userId);
    dispatch(getQuestionByIdFun(id))
  }catch(err){
    console.log(err);
  }
}

export const postAnswerFun = (answerData) => async(dispatch)=>{
  const {id, noOfAnswers, answerBody, userAnswered, userId} = answerData;
  try{
    const {data} = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId)
    dispatch({type: "POST_ANSWER", payload: data});
    dispatch(getQuestionByIdFun(id))
  }catch(err){
    console.log(err);
  }
}


export const deleteAnswersFun =(id, answerId, noOfAnswers)=> async(dispatch)=>{
  try{
    const {data} = await api.deleteAnswers(id, answerId, noOfAnswers)
    dispatch(getQuestionByIdFun(id))
  }catch(err){
    console.log(err);
  }
}