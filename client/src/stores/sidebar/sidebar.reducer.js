let active=false;

const sidebarReducer = (state=active, {type, payload}) =>{
  switch(type){
    case 'CHANGEMENU': return active=payload;
    default: return state;
  }
}
// console.log(active);

export default sidebarReducer;