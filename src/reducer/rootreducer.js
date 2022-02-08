import { combineReducers } from "redux";
import gamereducer from "./gamereducer";
import cartreducer from "./cartreducer";

const rootreducer = combineReducers({
    cartValue:cartreducer,
    gameValue:gamereducer
})

export default rootreducer; 