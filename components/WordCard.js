import { View, Text, Button, TouchableOpacity } from 'react-native';
import useWord from '../context/WordContext';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';
import axios from 'axios';
import styles from './styles';

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
        <View style={{flexDirection: "row"}}>
            <Text style={{justifyContent: 'flex-start', paddingHorizontal: 10}} onPress={() => handleClick(word)} value={word}>{word}
            <TouchableOpacity style={styles.listButton}>
            <Button onPress={handleDelete} title="X"/>
            </TouchableOpacity>
            </Text>
           
            
        </View> 
    )
};

export default WordCard;
