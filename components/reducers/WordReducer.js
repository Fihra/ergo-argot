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
        case ACTIONS.ADD_WORD:
            const newList = [payload.word, ...state.currentList];
            return {
                ...state,
                currentList: newList
            }
        default:
            return state;
    }
}

export default WordReducer;