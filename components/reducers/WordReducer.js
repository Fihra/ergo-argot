import ACTIONS from '../actions/actions';

export const initialState = {
    data: "",
    currentList: [],
    currentWord: ""
}

const WordReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case ACTIONS.GET_DATA:
            return {
                ...state,
                data: payload.data
            }
        case ACTIONS.SET_WORD:
            return {
                ...state,
                currentWord: payload.word
            }
        default:
            return state;
    }
}

export default WordReducer;