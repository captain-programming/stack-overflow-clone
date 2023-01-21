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

export const postAnswerFun = (answerData) => async(dispatch)=>{
  const {id, noOfAnswers, answerBody, userAnswered} = answerData;
  try{
    const {data} = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered)
    dispatch({type: "POST_ANSWER", payload: data});
    dispatch(getQuestionByIdFun(id))
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