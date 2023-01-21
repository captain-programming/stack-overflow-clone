const initial ={
  questionsData: null,
  questionsList: [],
  answerData: null,
  questionsSelf: null,
}

export const questionsReducer = (state = initial, {type, payload}) => {
  switch(type){
    case "POST_QUESTION" : return {
      ...state,
      questionsData: payload,
    }
    case "FETCH_ALL_QUESTION" : return{
      ...state,
      questionsList: payload,
    }
    case "FETCH_By_Id_QUESTION" : return{
      ...state,
      questionsSelf: payload,
    }
    case "POST_ANSWER" : return{
      ...state,
      answerData: payload,
    }
    default: return state
  }
}