const initialData={
    cart_items:[]

}

function newCartreducer(state = initialData,action){
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart_items:[...state.cart_items, action.payload]
            }
        case 'EMPTY_THE_CART':
            return {
                cart_items:[]
            }
        case 'REMOVE_FROM_CART':
            return{
                cart_items: state.cart_items.filter(item=>action.payload.item_name!==item.item_name)
            }
    
        default:
            return state;
    }
}

export default newCartreducer




// const initialData={
//     cart_items:[]
// }


// function newCartreducer(state = initialData,action){
//     switch (action.type){
//         case 'ADD_TO_CART':
//             return {
//                 cart_items:[...state.cart_items, action.payload]
//             }
//             case 'EMPTY_THE_CART':
//                 return{
//                     cart_items:[]
//                 }
//                 case 'REMOVE_FROM_CART':
//                     return{
//                         cart_items: state.cart_items.filter(item=>action.payload.item_name!==item.item_name)                        
//                     }

//                 default:
//                     return state;
//     }

// }

// export default newCartreducer;

