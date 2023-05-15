import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styles from './components/styles';
import React from 'react';
import List from './components/List';
import WordInput from './components/WordInput';
import UrbanCard from './components/UrbanCard';
import { WordProvider } from './context/WordContext';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false}/>
      <Text style={styles.title}>Ergo Argot</Text>
      <WordProvider>
      <View style={{}}>
        <UrbanCard/>
        <WordInput/>
        <List/>
        </View>
      </WordProvider>
    </View>
  );
}

export default App;