import axios from "axios";

// const API = axios.create({baseURL: "https://easy-teal-dove-tutu.cyclic.app/"});
const API = axios.create({baseURL: "http://localhost:8080/"});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('Profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
  }

  return req;
})

export const logIn = (authData) => API.post('users/login', authData);
export const signUp = (authData) => API.post('users/signup', authData);
export const fetchAllUsers = () => API.get('users/getAllUsers');
export const fetchUsersById = (id) => API.get(`users/getAllUsers/${id}`);
export const updateProfile = (id, updateData) => API.patch(`users/update/${id}`, updateData);

export const postQuestion = (qustionData) => API.post('/questions/ask', qustionData);
export const getAllQuestion = ()=> API.get('/questions');
export const getQuestionById = (id)=> API.get(`/questions/${id}`);
export const deleteQuestion = (id)=> API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId)=> API.patch(`questions/vote/${id}`, {value, userId});

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId});
export const deleteAnswers = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers});

//paymetn

export const handlePayment = async (amount) => API.post(`/payment`, {amount});