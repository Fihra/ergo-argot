import { Text, View, Button, Linking } from 'react-native';
import useWord from '../context/WordContext';
import styles from './styles';

const UrbanCard = () => {
    const { data } = useWord();

    const showCard = () => {
        if(data !== "") {
            return (
                <View style={styles.container}>
                <Text>Word: {data.list[0].word}</Text>
                <Text>Definition: {data.list[0].definition}</Text>
                <Text>Example: {data.list[0].example}</Text>
                <Button onPress={() => Linking.openURL(data.list[0].permalink)} title="Link"/>

                </View>
            )
        }
        return;

    }
    // console.log(data !== "" ? data.list[0] : "");
    return (
        showCard()
    )
};

export default UrbanCard;
