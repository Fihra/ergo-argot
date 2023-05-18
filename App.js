import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styles from './components/styles';
import React from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import List from './components/List';
import WordInput from './components/WordInput';
import UrbanCard from './components/UrbanCard';
import { WordProvider } from './context/WordContext';
import 'react-native-gesture-handler';

const App = () => {
  return (

      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <Topbar/>
        <Text style={styles.title}>Ergo Argot</Text>
        <WordProvider>
        <View>
          <UrbanCard/>
          <WordInput/>
          <List/>
          </View>
        </WordProvider>
      </View>

  );
}

export default App;
// registerRootComponent(App);