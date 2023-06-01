import { View, TextInput, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import useWord from '../context/WordContext';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';
import axios from 'axios';
import styles from './styles';

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
    <View style={{marginTop: 50, flexDirection: 'column'}}>
        <KeyboardAvoidingView behavior='height' style={{flex: 1}}>
          <TextInput
          style={{flex: 1, width: 200, alignItems: 'stretch'}}
          placeholder="Search here"
          onChangeText={newText => setWord(newText)}
          default={currentWord}
          value={currentWord}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button}>
            <Button color='green' onPress={handleSubmit} title="Submit"/>
        </TouchableOpacity>
    </View>

  )
};

export default WordInput;