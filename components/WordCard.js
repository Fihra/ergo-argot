import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const WordCard = (props) => {
    const { word } = props;
    return (
        <Text>
            {word}
        </Text> 
    )
};

export default WordCard;
