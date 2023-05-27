import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import useWord from '../context/WordContext';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const WordInput = () => {
    const { setWord, addWord, currentList, currentWord, fetchData } = useWord();

    const handleSubmit = async () => {
        if(!currentList.includes(currentWord)){
            addWord(currentWord);
          try {
            const response = await axios.request(fetchWord(currentWord));
            if(response.data.list.length >= 1){
              fetchData(response.data);
            }
            
          } catch(error) {
            console.log(error);
          }
        }
        setWord('');
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
    <View style={{flexDirection: 'row'}}>
        <TextInput
        style={{padding: 12}}
        placeholder="Search here"
        onChangeText={newText => setWord(newText)}
        default={currentWord}
        value={currentWord}
        />
        <Text onPress={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{marginLeft: 12, marginTop: 4}}/>
        </Text>
    </View>

  )
};

export default WordInput;