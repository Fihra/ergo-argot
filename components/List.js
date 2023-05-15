import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import useWord from '../context/WordContext';
import WordCard from './WordCard';

const List = () => {
    const { currentList } = useWord();

    const showList = () => {
        return currentList.map((word, key) => {
            return <WordCard key={key} word={word}/>
        })
    }

    return (
        <View style={{flex: 1, margin: 10}}>
            <Text>Words Searched: {"\n"}</Text>
            {showList()}
        </View>
    )
};

export default List;