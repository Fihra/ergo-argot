import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList(array => [...array, text])
  }
  
  const showList = () => {
    return list.map((word, key) => {
        return <Text key={key}>{word}</Text>
      })
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