import { combineReducers } from "redux";
import itemreducer from "./itemreducer";
import newCartreducer from "./newCartreducer";

const finalRootReducer= combineReducers({
    items:itemreducer,
    cart:newCartreducer
})

export default finalRootReducer





// import { combineReducers } from "redux";
// import itemreducer from "./itemreducer";
// import newCartreducer from "./newCartreducer";

// const finalRootReducer=combineReducers({
//     items:itemreducer,
//     cart:newCartreducer
// })

// export default finalRootReducer

