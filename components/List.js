import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import useWord from '../context/WordContext';

const List = (props) => {
    const { currentList } = useWord();

    const testData = ["blahh", "blue", "waah"];

    const showList = () => {
        return testData.map((word) => {
            return <Text>{word}</Text>
        })
    }

    return (
        <View style={{flex: 1, margin: 10}}>
            {showList()}
        </View>
    )
};

export default List;