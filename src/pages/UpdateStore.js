import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const UpdateStore = () => {
  const dispatch = useDispatch()
  const cartvalue = useSelector(store => store.cartValue.cart_value)
  // const dd_item = () =>{
  //   ()=>dispatch({type:'ADD'})
  // }

  return (
  <>
   <button onClick={()=>dispatch({type:'ADD'})}>Add to cart</button>
   {cartvalue >0 &&<button onClick={()=>dispatch({type:'REMOVE'})}>Remove from cart</button>}
  </>);
};

export default UpdateStore;
 