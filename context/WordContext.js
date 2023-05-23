import { createContext, useReducer, useContext } from 'react'
import WordReducer, { initialState } from '../components/reducers/WordReducer'
import ACTIONS from '../components/actions/actions';

export const WordProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WordReducer, initialState);

    const fetchData = (data) => {
        dispatch({
            type: ACTIONS.GET_DATA,
            payload: { data: data}
        })
    }

    const setWord = (newWord) => {
        dispatch({
            type: ACTIONS.SET_WORD,
            payload: { word: newWord}
        })
    }

    const addWord = (newWord) => {
        dispatch({
            type: ACTIONS.ADD_WORD,
            payload: { word: newWord }
        })
    }

    const deleteWord = (deletedWord) => {
        dispatch({
            type: ACTIONS.DELETE_WORD,
            payload: { word: deletedWord}
        })
    }

    const value = {
        data: state.data,
        currentList: state.currentList,
        currentWord: state.currentWord,
        setWord,
        addWord,
        fetchData,
        deleteWord,
    }

    return <WordContext.Provider value={value}>{children}</WordContext.Provider>

}

const useWord = () => {
    const context = useContext(WordContext);
    if(context === undefined) {
        throw new Error("no pattern context found");
    }

    return context;
}

export default useWord;

export const WordContext = createContext(initialState);