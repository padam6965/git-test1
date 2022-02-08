import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import finalRootReducer from '../newReducers/finalRootReducer';
import Items from './Items';
import Cart from './Cart';
export const store = createStore(finalRootReducer)
const Mainpage = () => {
  
  return (<>
    
      
    <Items/>
    {/* <Cart/> */}
      
    
  </>);
};














// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import Items from '../components/Items';
// import Navbar from '../components/Navbar';
// import finalRootReducer from '../newReducer/finalRootReducer';

// const Mainpage = () => {
//     const store = createStore(finalRootReducer)
//     return ( <>
//     <Provider store={store}>
   
//         <Navbar/>
//         <Items />
//         </Provider> 
//     </>
//     );
// };

// export default Mainpage; 
