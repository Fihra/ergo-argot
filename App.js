import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View} from 'react-native';
import styles from './components/styles';
import React from 'react';
import List from './components/List';
import WordInput from './components/WordInput';
import UrbanCard from './components/UrbanCard';
import { WordProvider } from './context/WordContext';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#DBE3FA"}}>
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <Text style={styles.title}>Ergo Argot</Text>
        <WordProvider>
        <View style={styles.mainSection}>
          <UrbanCard/>
          <WordInput/>
          <List/>
          </View>
        </WordProvider>
      </View>
    </SafeAreaView>
  );
}

export default App;