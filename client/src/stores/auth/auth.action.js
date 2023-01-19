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