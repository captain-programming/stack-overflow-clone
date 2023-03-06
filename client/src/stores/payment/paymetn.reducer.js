var initalPayment = {message: "Not done", payment_id: null};

export const PaymentReducers = (state=initalPayment, {type, payload})=>{
  switch(type){
    case "PAYMENT_GATWAY": return initalPayment= payload
    default: return state;
  }
}