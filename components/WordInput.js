import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import useWord from '../context/WordContext';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';
import axios from 'axios';

const WordInput = () => {
    const { setWord, addWord, currentList, currentWord, fetchData } = useWord();

    const handleSubmit = async () => {
        if(!currentList.includes(currentWord)){
            addWord(currentWord);
          try {
            const response = await axios.request(fetchWord(currentWord));
            fetchData(response.data);
          } catch(error) {
            console.log(error);
          }
        }
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
        style={{}}
        placeholder="Search me up"
        onChangeText={newText => setWord(newText)}
        default={currentWord}
        value={currentWord}
        />
        <Button onPress={handleSubmit} title="Enter"></Button>
    </View>

  )
};

export default WordInput;