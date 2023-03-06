

export const activeMenu = (active)=> async(dispatch)=>{
  
  dispatch({type: "CHANGEMENU", payload: active});
  
}
