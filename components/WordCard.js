import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import useWord from '../context/WordContext';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';
import axios from 'axios';

const WordCard = (props) => {
    const { currentList, fetchData, changeWord, deleteWord } = useWord();
    const { word } = props;

    const handleClick = async (word) => {
        const newWord = currentList.filter(w => {
            return w === word
        }).toString();

        try {
            const response = await axios.request(fetchWord(newWord));
            if(response.data.list.length >= 1){
                fetchData(response.data);
            }
        } catch(error) {
            console.log(error);
        }

        changeWord(newWord);
    }

    const handleDelete = () =>{
        deleteWord(word);
    }

    const fetchWord = (word) => {
        const wordOption = {
          method: 'GET',
          url: REACT_APP_API_URL,
          params: {term: word},
          headers: {
            'X-RapidAPI-Key': REACT_APP_KEY,
            'X-RapidAPI-Host': REACT_APP_HOST
          }
        }
        return wordOption;
    }

    return (
        <Text>
            <Text onPress={() => handleClick(word)} value={word}>{word}</Text><Text onPress={handleDelete}><FontAwesomeIcon icon={faX} style={{paddingRight: 12, color: "red"}}/></Text>
        </Text> 
    )
};

export default WordCard;
