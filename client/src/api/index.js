import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const logIn = (authData) => API.post('users/login', authData);
export const signUp = (authData) => API.post('users/signup', authData);