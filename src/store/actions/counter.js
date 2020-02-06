import * as actionTypes from './actionTypes';

export const counterIncriment = () => ({ type: actionTypes.counterIncriment });
export const counterDecriment = () => ({ type: actionTypes.counterDecriment });

//Example of the async actoins with redux-tunk
export const counterIncrimentAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(counterIncriment);
    }, 2000);
};