import Condition from "yup/lib/Condition"
const initialData = {
    game_name: "Football",
    player_name: ""
}

function gamereducer(state = initialData, action) {
    switch (action.type) {
        case 'UPDATE_GAME':

            if (action.payload.match(/^([a-zA-Z])+$/)) {
                return {
                    ...state,  /* This Allows us to change multiple cases and store the previous change as new default  */
                    game_name: action.payload
                }

            }

            else {
                return state
            }

        case 'UPDATE_PLAYER':
            if (action.payload.match(/^([a-zA-Z])+$/)) {
                return {
                    ...state,
                    player_name: action.payload
                }

            }
            // else {
            //     return state
            //     player_name: action.payload

            // }

        default:
            return state
    }

}

export default gamereducer;