import * as api from "../../api";

export const paymentGateway = (amount, navigate, Razorpay) => async(dispatch)=>{
  try{
    let order = await api.handlePayment(amount);
    console.log(order.data.order)
    const options = {
      key: "rzp_test_BGsHlrOC6ckVmo",
      amount: amount * 100, 
      currency: "INR",
      order_id: order.data.order, 
      handler: function (response) {
        dispatch({type: "PAYMENT_GATWAY", payload: {message: order.data.message, payment_id: response.razorpay_payment_id}});
        
        setTimeout(() => {
          navigate("/")
      }, 3000);
      },
    };

    const rzp1 = new Razorpay(options)

        rzp1.open();

  }catch(err){
    console.log(err);
  }
}