import {BUY_ICECREAM} from './iceCreamType';

const intialState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = intialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
        return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: 
        return state
    }
}


export default iceCreamReducer;