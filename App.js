import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from './components/List';
import WordInput from './components/WordInput';
import UrbanCard from './components/UrbanCard';
import { WordProvider } from './context/WordContext';

const App = () => {
  return (
    <View style={styles.container}>
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