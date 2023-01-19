const initialValue = {
  profile: null,
};

const authReducer = (state=initialValue, {type, payload}) =>{
  switch(type){
    case 'AUTH' : 
    localStorage.setItem('Profile', JSON.stringify({...payload}))
    return { ...state, profile: payload}
    default: return state;
  }
}

export default authReducer;