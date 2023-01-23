const initialValue = {
  profile: null,
  allUserData: [],
  userInfo: null,
  updateUserInfo: null,
};

const authReducer = (state=initialValue, {type, payload}) =>{
  switch(type){
    case 'AUTH' : 
    localStorage.setItem('Profile', JSON.stringify({...payload}))
    return { ...state, profile: payload}
    case 'LOGOUT': 
    localStorage.clear();
    return {...state, data: null};
    case "FETCH_USERS": return {...state, allUserData: payload}
    case "FETCH_USERS_BY_ID": return {...state, userInfo: payload}
    case "UPDATE_CURRENT_USER": return {...state, updateUserInfo: payload}
    default: return state;
  }
}

export default authReducer;