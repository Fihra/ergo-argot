import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import { REACT_APP_API_URL, REACT_APP_KEY, REACT_APP_HOST } from '@env';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = async () => {
    if(!list.includes(text)){
      setList(array => [...array, text]);

      try {
        const response = await axios.request(fetchWord(text));
        console.log(response.data);
      } catch(error) {
        console.log(error);
      }

    }
  }
  
  const showList = () => {
    const reverseList = [...list].reverse();
    return reverseList.map((word, key) => {
        return <Text key={key}>{word}</Text>
      })
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
    <View style={styles.container}>
      <Text style={styles.title}>Ergo Argot</Text>
      <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{height: 40}}
        placeholder="Search me up"
        onChangeText={newText => setText(newText)}
        default={text}
        value={text}
      />
      <Button onPress={handleSubmit} title="Enter"></Button>
      </View>
      <Text>Past Searches:</Text>
      <View style={{flex: 1, margin: 10}}>
      {showList()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default App;