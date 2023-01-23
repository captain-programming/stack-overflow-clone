import * as api from "../../api";
import { setCurrentUser } from "../currentUser/currentUser.action";

export const signup = (authData, navigate)=> async(dispatch)=>{
  try{
    let {data} = await api.signUp(authData);
    dispatch({type: "AUTH", payload: data});
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/');
  }catch(err){
    console.log(err);
  }
}

export const login = (authData, navigate)=> async(dispatch)=>{
  try{
    let {data} = await api.logIn(authData);
    dispatch({type: "AUTH", payload: data});
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/');
  }catch(err){
    console.log(err);
  }
}

export const fetchAllUsersFun =() => async(dispatch) => {
  try{

    const {data} = await api.fetchAllUsers();
    dispatch({type: "FETCH_USERS", payload: data});
  }catch(err){
    console.log(err);
  }
}

export const fetchUsersByIdFun =(id) => async(dispatch) => {
  try{

    const {data} = await api.fetchUsersById(id);
    dispatch({type: "FETCH_USERS_BY_ID", payload: data});
  }catch(err){
    console.log(err);
  }
}

export const updateProfileFun = (id, updatedata) => async(dispatch) =>{
  try{
    const {data} = await api.updateProfile(id, updatedata)
    dispatch({type: 'UPDATE_CURRENT_USER', payload: data})
    dispatch(fetchUsersByIdFun(id));
  }catch(err){
    console.log(err);
  }
}