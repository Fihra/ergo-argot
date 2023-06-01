import { Text, View, Button, Linking, Pressable, ScrollView, ToastAndroid, Platform } from 'react-native';
import useWord from '../context/WordContext';
import styles from './styles';

const UrbanCard = () => {
    const { data } = useWord();

    const showMoreScroll = () => {
        ToastAndroid.showWithGravity("Scroll for more", ToastAndroid.SHORT, ToastAndroid.TOP);
      }

    const showCard = () => {
        if(data !== "") {
            return (
                <ScrollView style={styles.urbanContainer}>
                    {Platform.OS === 'android' ? showMoreScroll() : null}
                    <View>
                    <Text>Word: <Text style={{fontWeight: "bold"}}>{data.list[0].word}</Text></Text>
                    <Text>Definition: {data.list[0].definition}</Text>
                    <Text>Example: {data.list[0].example}</Text>
                    <Pressable style={styles.button}>
                    <Button onPress={() => Linking.openURL(data.list[0].permalink)} title="Urban Dictionary"/>
                    </Pressable>
                    </View>
                </ScrollView>
            )
        }
    }

    return (
        showCard()
    )
};

export default UrbanCard;
