import { Text, View, Button, Linking, Pressable } from 'react-native';
import useWord from '../context/WordContext';
import styles from './styles';

const UrbanCard = () => {
    const { data } = useWord();

    const showCard = () => {
        if(data !== "") {
            return (
                <View style={{maxHeight: 300}}>
                <Text>Word: <Text style={{fontWeight: "bold"}}>{data.list[0].word}</Text></Text>
                <Text>Definition: {data.list[0].definition}</Text>
                <Text>Example: {data.list[0].example}</Text>
                <Pressable style={styles.button}>
                <Button onPress={() => Linking.openURL(data.list[0].permalink)} title="Link"/>
                </Pressable>

                </View>
            )
        }
        return;
    }
    return (
        showCard()
    )
};

export default UrbanCard;
