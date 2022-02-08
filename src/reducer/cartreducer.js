const initialData = {
    cart_value: 10

}

function cartreducer(state=initialData, action) {
    switch (action.type) {
        case 'ADD':
            return {
                cart_value:++state.cart_value
            }
        case 'REMOVE':
            return {
                cart_value:--state.cart_value
            }
        default:
            return state;

    }
}

export default cartreducer 