import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const logIn = (authData) => API.post('users/login', authData);
export const signUp = (authData) => API.post('users/signup', authData);

export const postQuestion = (qustionData) => API.post('/questions/ask', qustionData);
export const getAllQuestion = ()=> API.get('/questions');
export const getQuestionById = (id)=> API.get(`/questions/${id}`);
export const deleteQuestion = (id)=> API.delete(`/questions/delete/${id}`)

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered});