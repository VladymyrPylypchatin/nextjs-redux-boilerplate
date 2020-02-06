import * as actionTypes from '../actions/actionTypes';
const initialState = {
    count: 0,
}; //Initial state of the counter

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_INCRIMENT:
            return {
                count: state.count + 1,
            };

        case actionTypes.COUNTER_DECRIMENT:
            return {
                count: state.count - 1,
            };

        default: return state;
    }
};

export default reducer;