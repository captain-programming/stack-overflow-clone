const currentUserReducer = (state = null, {type, payload}) => {
  switch(type){
    case 'FETCH_CURRENT_USER' : return payload;
    default : return state;
  }
}

export default currentUserReducer;